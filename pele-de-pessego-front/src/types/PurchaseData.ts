export default interface PurchaseData {
    id?: number;
    type: string;
    parcel: boolean;
    price: number;
    qt_parcel: number;
    date: Date;
}