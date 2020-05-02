import { Cliente } from './cliente.model';
import { Servico } from './servico.model';

export interface Reserva {
    dia: number;
    horario: string;
    servicos: Servico[],
    cliente: Cliente
}