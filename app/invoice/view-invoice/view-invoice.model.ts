export interface ViewInvoiceModel {
    id: number;
    crnNumber: string;
    rideDate: string;
    shift: string;
    rideFrom: string;
    rideTo: string;
    fare: number;
    invoiceStatus: string;
}