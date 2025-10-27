export interface VendaUser {
   id: string;
   nome: string;
   preco: number;
   status: string;
   pagamento: string;
   parcelas: number | null;
   data: string
}