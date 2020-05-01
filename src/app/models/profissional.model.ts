export interface Endereco {
    rua: number;
    setor: string;
    numero: number;
    quadra: number;
    estado: string;
    cidade: string;
    latitude: number;
    longitude: number;
}

export interface Profissional {
    nome: string;
    local: Endereco;
}