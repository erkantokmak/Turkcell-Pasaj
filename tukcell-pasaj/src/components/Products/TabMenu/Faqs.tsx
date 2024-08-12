import { submitQuestion } from '@/lib/server'
import { Container, Row, StyledHr, Title, YellowButton } from '@/styles/Global'
import { IconWrapper, SearchBar, SearchWrapper } from '@/styles/Header/HeaderStyle'
import { BlueButton, FaqsContent, FaqsItem, FaqsSearch, FaqsTab, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@/styles/Products/DetailPage'
import { Product, Question } from '@/types/product'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

type FaqsProps = {
  data: Product
}
const Faqs: React.FC<FaqsProps> = ({ data }) => {

  const [search, setSearch] = useState<string>('');
  const [seller, setSeller] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>('');
  const queryClient = useQueryClient();

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value)
  }

  // const submitQuestionMutation = useMutation<Error>(
  //   {
  //     mutationFn: (productId: string, questionData: Question) => submitQuestion(productId, questionData),
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ['product', data.id] });
  //       setModalOpen(false);
  //       setQuestion('');
  //     },
  //     onError: (error: Error) => {
  //       console.error('Error submitting question:', error);
  //     }
  //   }
  // );
  
  
  const handleSubmit = () => {
    const questionData: Question = {
      id: crypto.randomUUID(), 
      userId: "1",
      userName: "Erkan",
      question: question,
      askDate: new Date().toLocaleDateString(),
      answer: "",
      answerBy: "",
      answerDate: ""
    }
    if (question.trim()) {
      submitQuestionMutation.mutate(data.id , questionData);
    }
  }


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleSeller = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeller(e.target.value)
  }

  const filteredFaqs = data.questions.filter((question) =>
    question.question.toLowerCase().includes(search.toLowerCase()) ||
    question.answer.toLowerCase().includes(search.toLowerCase()) ||
    question.answerBy.toLowerCase().includes(seller.toLowerCase()))


  return (
    <FaqsTab>
      <Container>
        <Row alignItems='center' justifyContent='flex-start' gap='20px' margin='0 0 20px 0'>
          <SearchWrapper>
            <FaqsSearch
              placeholder='Soru & Cevaplarda Ara'
              type='text'
              name='search'
              value={search}
              onChange={(e) => handleSearch(e)}
            />
            <IconWrapper>
              <FaSearch />
            </IconWrapper>
          </SearchWrapper>
          <FaqsSearch
            placeholder='Satıcıya Göre Ara'
            type='text'
            name='seller'
            value={seller}
            onChange={(e) => handleSeller(e)}
          />
          <BlueButton display='block' width='100%' onClick={() => setModalOpen(true)}>Satıcıya Sor</BlueButton>
        </Row>
        {
          filteredFaqs.map((question, index) => (
            <FaqsContent>
              <FaqsItem>
                <Row alignItems='center' margin='0 0 8px 0' justifyContent='flex-start'>
                  <Title fsize='14px' fcolor='#8e9fad' margin='0 10px 0 0'>Soru</Title>
                  <Title fsize='11px' fcolor='#8e9fad'>{question.askDate}</Title>
                </Row>
                <Row alignItems='center' justifyContent='flex-start' margin='0 0 10px 0'>
                  <Title fsize='16px' fcolor='#5f6b76' lineHeight='1.25' fweight='500'>{question.question}</Title>
                </Row>
                <StyledHr />
                <Row justifyContent='flex-start'>
                  <Title fsize='14px' fcolor='#2855ac' margin='0 10px 0 0'>
                    {question.answerBy ? question.answerBy : 'Turkcell'}
                  </Title>
                  <Title fsize='11px' fcolor='#8e9fad' margin='0 10px 0 0'>yanıtladı</Title>
                  <Title fsize='11px' fcolor='#8e9fad'>{question.answerDate}</Title>
                </Row>
                <Row alignItems='center' justifyContent='flex-start' margin='0 0 10px 0'>
                  <Title fsize='16px' fcolor='#5f6b76' lineHeight='1.25' fweight='500'>{question.answer}</Title>
                </Row>
              </FaqsItem>
            </FaqsContent>
          ))
        }
        {isModalOpen && (
          <Row>
            <ModalOverlay onClick={() => setModalOpen(false)} />
            <ModalContent>
              <ModalHeader>
                Satıcıya Soru Sor
                <ModalCloseButton onClick={() => setModalOpen(false)}>&times;</ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                <FaqsSearch
                  placeholder='Sorunuzu yazın...'
                  type='textarea'
                  name='question'
                  value={question}
                  onChange={handleQuestionChange}
                />
              </ModalBody>
              <ModalFooter>
                <BlueButton onClick={handleSubmit}>Gönder</BlueButton>
              </ModalFooter>
            </ModalContent>
          </Row>
        )}
      </Container>
    </FaqsTab>
  )
}

export default Faqs