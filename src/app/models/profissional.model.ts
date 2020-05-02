export interface DiasTrabalho {
    dom: boolean;
    seg: boolean;
    ter: boolean;
    qua: boolean;
    qui: boolean;
    sex: boolean;
    sab: boolean;
}

export interface Profissional {
    nome: string;
    img_perfil: string;
    diasTrabalho: DiasTrabalho;
}