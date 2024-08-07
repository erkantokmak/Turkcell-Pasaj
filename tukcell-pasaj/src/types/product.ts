interface Detail {
    model: string;
    storage: string;
    screenSize: string;
    screenResolution: string;
    processor: string;
    ram: string;
    battery: string;
    camera: string;
    frontCamera: string;
    operatingSystem: string;
    simCard: string;
    network: string;
    weight: string;
    dimensions: string;
    waterproof: string;
    dualSim: string;
    warranty: string;
}

interface Comment {
    id: number;
    userId: number;
    userName: string;
    comment: string;
    rating: number;
    like: number;
    date: string;
}

interface Question {
    id: number;
    userId: number;
    userName: string;
    question: string;
    answer: string;
    answerBy: string;
    date: string;
}

interface Explanation {
    title: string;
    text: string;
    image: string;
}

interface Image {
    imgUrl: string;
}

export type Product = {
    id: number,
    name: string,
    price: number,
    discountPercentage: number,
    discountEndDate: string,
    stock: number,
    bestOffer: boolean,
    bestSeller: boolean,
    newArrival: boolean,
    shoppingCredit: boolean,
    freeShipping: boolean,
    fastDelivery: boolean,
    payWithInvoice: boolean,
    installmentInvoice: boolean,
    limitedSelling: boolean,
    image: Image[],
    color: Array<string>,
    credit: boolean,
    creditMonth: number,
    creditPrice: string,
    description: string,
    category: string,
    subCategory: string,
    rating: number,
    addingDate: string,
    edittedDate: string,
    seller: string,
    detailText: string,
    explanation: Explanation[],
    details: Detail[],
    comments: Comment[],
    questions: Question[]
}