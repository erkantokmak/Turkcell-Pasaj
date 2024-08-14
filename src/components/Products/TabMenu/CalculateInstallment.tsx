import { ImageWrapper, Row } from '@/styles/Global';
import { BankTable, BankTableTbody, BankTableTd, BankTableTh, BankTableThead } from '@/styles/Products/DetailPage';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface InstallmentResult {
    installments: number;
    installmentAmount: string;
    totalAmount: string;
}

type CalculateInstalmentProps = {
    price: number;
    image: string;
}
const CalculateInstallment: React.FC<CalculateInstalmentProps> = ({ price, image }) => {

    const [results, setResults] = useState<InstallmentResult[]>([]);

    const calculateInstallments = (price: number, installmentsArray: number[]): InstallmentResult[] => {
        return installmentsArray.map((installments) => {
            const baseInstallmentAmount = price / installments;
            const installmentAmount = baseInstallmentAmount.toFixed(2);
            let totalAmount = 0;
            for (let i = 1; i <= installments; i++) {
                totalAmount += baseInstallmentAmount * (1 + 0.03 * i);
            }
            totalAmount = parseFloat(totalAmount.toFixed(2).toLocaleString('tr-TR'));

            return { installments, installmentAmount, totalAmount };
        });
    };

    useEffect(() => {
        if (price > 0) {
            const installmentsArray = [2, 3, 4, 5, 6];
            const calculatedResults = calculateInstallments(price, installmentsArray);
            setResults(calculatedResults);
        }
    }, [price]);

    return (
        <>
            <BankTable>
                <BankTableThead>
                    <tr>
                        <BankTableTh></BankTableTh>
                        <BankTableTh>
                            <ImageWrapper width='100px' height='100px'>
                                <Image src={`/images/banks/${image}`} alt='Banka Logo' fill style={{objectFit:'contain'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </ImageWrapper>
                        </BankTableTh>
                        <BankTableTh></BankTableTh>
                    </tr>
                </BankTableThead>
                <BankTableThead>
                    <tr>
                        <BankTableTh>Vade</BankTableTh>
                        <BankTableTh>Taksit Tutarı</BankTableTh>
                        <BankTableTh>Toplam Tutar</BankTableTh>
                    </tr>
                </BankTableThead>
                <BankTableTbody>
                    {results.map((result) => (
                        <tr key={result.installments}>
                            <BankTableTd>{result.installments}</BankTableTd>
                            <BankTableTd>{result.installmentAmount} TL</BankTableTd>
                            <BankTableTd>{result.totalAmount} TL</BankTableTd>
                        </tr>
                    ))}
                </BankTableTbody>
            </BankTable>
        </>
    )
}

export default CalculateInstallment