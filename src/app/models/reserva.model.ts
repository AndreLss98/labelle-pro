import { Profissional } from './profissional.model';
import { Servico } from './servico.model';

export interface Reserva {
    dia: number;
    horario: string;
    servicos: Servico[],
    profissional: Profissional
}