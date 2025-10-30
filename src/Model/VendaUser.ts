export interface VendaUser {
   id: string;
   nome: string;
   preco: number;
   status: "processando" | "falha" | "pago";
   pagamento: "boleto" | "cartao" | "pix";
   parcelas: number | null;
   data: string
}