type QrCodeData = {
    name: string;
    iban: string;
    bic?: string;
    amount?: number;
    purposeCode?: string;
    structuredReference?: string;
    unstructuredReference?: string;
    information?: string;
};
declare const generateQrCode: (data: QrCodeData) => string;
export = generateQrCode;
