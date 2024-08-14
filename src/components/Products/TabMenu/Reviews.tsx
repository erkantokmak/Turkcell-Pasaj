import { fetchProductQuestions, submitReview } from '@/lib/server'
import { Column, Container, Row, StyledHr, Title } from '@/styles/Global'
import { BlueButton, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalInput, ModalOverlay, RatingCount, ReviewItem, ReviewsTab, SortDropdown } from '@/styles/Products/DetailPage'
import { Product } from '@/types/product'
import { Rating } from '@smastrom/react-rating'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { useSession } from 'next-auth/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Comment } from '@/types/product'

type ReviewsProps = {
  data: Product
}
const Reviews: React.FC<ReviewsProps> = ({ data }) => {

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [sortOption, setSortOption] = useState<string>('Çoktan Aza');
  const {data: session} = useSession();
  const queryClient = useQueryClient();
  const uid = (session?.user as { id: string })?.id;

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value)
  }

  const { mutate } = useMutation({
    mutationFn: () => fetchProductQuestions(data.id as string),
    onSuccess: () => {
        // mesaj ekle
        console.log("başarılı")
        queryClient.invalidateQueries({ queryKey: ['product'] })
    }
})

const handleSubmit = async () => {
  const reviewData: Comment = {
    id: crypto.randomUUID(),
    userId: uid,
    userName: "Product is Testing...", 
    comment: review, 
    rating: rating, 
    like: 0, 
    date: new Date().toLocaleDateString()
  };
  console.log("reviewData", reviewData);
  const reviews: Comment[] = [...data.comments, reviewData];
  console.log("reviews", reviews);
  if (review && rating) {
    try {
      await submitReview({ id: data.id, reviews: reviews });
      setModalOpen(false);
      setReview(''); 
      setRating(0); 
      mutate();
    } catch (error) {
      console.log("error", error);
    }
  }
};

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  }

  const sortedComments = [...data.comments].sort((a, b) => {
    switch (sortOption) {
      case 'Çoktan Aza':
        return b.rating - a.rating;
      case 'Azdan Çoka':
        return a.rating - b.rating;
      case 'Eskiden Yeniye':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'Yeniden Eskiye':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      default:
        return b.rating - a.rating;;
    }
  });

  return (
    <>
      <Container>
        <Row alignItems='flex-start' justifyContent='space-between' margin='30px 0 0 0'>
          <ReviewsTab>
            <Column gap='10px' justifyContent='flex-start' alignItems='flex-start'>
            <Title fcolor='#5f6b76' fsize='15px'>Ürün Değerlendirmeleri</Title>
            <Title fcolor='#8e9fad' fsize='18px'>{data.comments.length} kere puanlandı</Title>
            <Row alignItems='center'>
              <Rating
                style={{ maxWidth: 70 }}
                value={5}
                items={5}
                readOnly
              />
              <RatingCount>5</RatingCount>
            </Row>
            </Column>
            <StyledHr />
            <Row alignItems='center' justifyContent='flex-start' margin='20px 0' width='50%'>
              <BlueButton display='block' width='100%' onClick={() =>{ 
                if(uid){
                  setModalOpen(true)
                } else {
                  //mesaj ekle
                  alert("Yorum yapabilmek için giriş yapmalısınız.")
                }
              }}>Yorum Yaz</BlueButton>
            </Row>
          </ReviewsTab>
          
          <SortDropdown value={sortOption} onChange={handleSortChange}>
            <option value="Çoktan Aza">Puana Göre: Çoktan Aza</option>
            <option value="Azdan Çoka">Puana Göre: Azdan Çoka</option>
            <option value="Eskiden Yeniye">Tarihe Göre: Eskiden Yeniye</option>
            <option value="Yeniden Eskiye">Tarihe Göre: Yeniden Eskiye</option>
          </SortDropdown>
          
        </Row>
        <Row>
          <Column gap='20px' justifyContent='flex-start' alignItems='flex-start'>
            {
              sortedComments.map((comment, index) => (
                <ReviewItem key={index}>
                  <Row alignItems='center' justifyContent='flex-start' margin='0 0 10px 0'>
                    <Rating
                      style={{ maxWidth: 70 }}
                      value={comment.rating}
                      items={5}
                      readOnly
                    />
                    <RatingCount>{comment.rating}</RatingCount>
                    <Title fsize='.75rem' fcolor='#5f6b76' fweight='500' margin='0 0 0 10px'>{comment.userName} |</Title>
                    <Title fsize='.75rem' fcolor='#5f6b76' margin='0 0 0 10px'>{comment.date}</Title>
                    <Title fsize='.75rem' fcolor='#5f6b76' margin='0 0 0 10px' fweight='700'>{data.seller} <FaCheckCircle /> Satın alındı.</Title>
                  </Row>
                  <Row alignItems='center' justifyContent='flex-start' margin='0 0 10px 0'>
                    <Title fsize='14px' fcolor='#5f6b76'>{comment.comment}</Title>
                  </Row>
                  <Row alignItems='center' justifyContent='flex-start' margin='0 0 10px 0'>
                    <Title fsize='14px' fcolor='#8e9fad'>Bu yorumu faydalı buldunuz mu?</Title>
                  </Row>
                </ReviewItem>
              ))
            }
          </Column>
        </Row>
        {isModalOpen && (
          <Row>
            <ModalOverlay onClick={() => setModalOpen(false)} />
            <ModalContent>
              <ModalHeader>
                Ürünü Değerlendir
                <ModalCloseButton onClick={() => setModalOpen(false)}>&times;</ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={rating}
                  items={5}
                  readOnly={false}
                  onChange={setRating}
                />
                <ModalInput
                  placeholder='Yorumunuzu Yazın...'
                  type='textarea'
                  name='question'
                  value={review}
                  onChange={handleReviewChange}
                />
              </ModalBody>
              <ModalFooter>
                <BlueButton onClick={handleSubmit}>Gönder</BlueButton>
              </ModalFooter>
            </ModalContent>
          </Row>
        )}
      </Container>
    </>
  )
}

export default Reviews