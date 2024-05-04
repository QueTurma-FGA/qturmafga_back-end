const todasAsMaterias = [
  // {codigo: "FGA0003", nome: "COMPILADORES 1"},
  // {codigo: "FGA0006", nome: "FUNDAMENTOS DE EQUAÇÕES DIFERENCIAIS PARA ENGENHARIA"},
  // {codigo: "FGA0008", nome: "SISTEMAS AEROESPACIAIS"},
  // {codigo: "FGA0013", nome: "ANATOMIA E FISIOLOGIA HUMANA"},
  // {codigo: "FGA0015", nome: "PROCESSAMENTO DIGITAL DE IMAGENS"},
  // {codigo: "FGA0017", nome: "PROJETOS DE CIRCUITOS INTEGRADOS 1"},
  // {codigo: "FGA0023", nome: "DINÂMICA DOS MECANISMOS"},
  // {codigo: "FGA0025", nome: "SISTEMAS DE ENERGIA SOLAR E EÓLICA"},
  // {codigo: "FGA0030", nome: "ESTRUTURAS DE DADOS 2"},
  // {codigo: "FGA0034", nome: "TÓPICOS ESPECIAIS EM MATEMÁTICA APLICADA"},
  // {codigo: "FGA0037", nome: "TÓPICOS ESPECIAIS EM ENGENHARIA AEROESPACIAL"},
  // {codigo: "FGA0038", nome: "AERODINÂMICA DE SISTEMAS AEROESPACIAIS"},
  // {codigo: "FGA0039", nome: "MECÂNICA DE ESTRUTURAS AEROESPACIAIS"},
  // {codigo: "FGA0040", nome: "SISTEMAS DE CONTROLE AUTOMOTIVO"},
  // {codigo: "FGA0043", nome: "DINÂMICA DOS GASES PARA SISTEMAS AEROESPACIAIS"},
  // {codigo: "FGA0044", nome: "PROJETO DE SISTEMAS DE CONTROLE"},
  // {codigo: "FGA0045", nome: "MECÂNICA DO VÔO"},
  // {codigo: "FGA0047", nome: "PROCESSOS PETROQUÍMICOS"},
  // {codigo: "FGA0048", nome: "MECÂNICA DO VOO ESPACIAL"},
  // {codigo: "FGA0050", nome: "DINÂMICA DE ESTRUTURAS AEROESPACIAIS"},
  // {codigo: "FGA0052", nome: "PROPULSÃO AEROESPACIAL"},
  // {codigo: "FGA0053", nome: "TÓPICOS ESPECIAIS EM PROGRAMAÇÃO"},
  // {codigo: "FGA0054", nome: "TÓPICOS ESPECIAIS EM GOVERNANÇA DE TECNOLOGIA DA INFORMAÇÃO"},
  // {codigo: "FGA0055", nome: "TECNOLOGIAS DE FABRICAÇÃO 1"},
  // {codigo: "FGA0056", nome: "TECNOLOGIAS DE FABRICAÇÃO 2"},
  // {codigo: "FGA0060", nome: "SISTEMAS DE BANCO DE DADOS 2"},
  // {codigo: "FGA0063", nome: "PROPULSÃO AERONÁUTICA"},
  // {codigo: "FGA0066", nome: "FUNDAMENTOS DE VARIÁVEL COMPLEXA PARA ENGENHARIA"},
  // {codigo: "FGA0067", nome: "TEORIA DE CIRCUITOS ELETRÔNICOS 1"},
  // {codigo: "FGA0068", nome: "TEORIA DE CIRCUITOS ELETRÔNICOS 2"},
  // {codigo: "FGA0069", nome: "PRÁTICA DE CIRCUITOS ELETRÔNICOS 1"},
  // {codigo: "FGA0070", nome: "PRÁTICA DE CIRCUITOS ELETRÔNICOS 2"},
  // {codigo: "FGA0071", nome: "PRÁTICA DE ELETRÔNICA DIGITAL 1"},
  // {codigo: "FGA0072", nome: "PRÁTICA DE ELETRÔNICA DIGITAL 2"},
  // {codigo: "FGA0073", nome: "TEORIA DE ELETRÔNICA DIGITAL 1"},
  // {codigo: "FGA0074", nome: "TEORIA DE ELETRÔNICA DIGITAL 2"},
  // {codigo: "FGA0075", nome: "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO"},
  // {codigo: "FGA0076", nome: "EQUIPAMENTOS TERMOFLUIDOS AUTOMOTIVOS"},
  // {codigo: "FGA0078", nome: "TEORIA DE MATERIAIS DE CONSTRUÇÃO"},
  // {codigo: "FGA0083", nome: "APRENDIZADO DE MÁQUINA"},
  // {codigo: "FGA0084", nome: "DESENVOLVIMENTO DE SOFTWARE"},
  // {codigo: "FGA0085", nome: "MATEMÁTICA DISCRETA 1"},
  // {codigo: "FGA0086", nome: "TEORIA DE ELETRICIDADE APLICADA"},
  // {codigo: "FGA0087", nome: "LABORATÓRIO DE ELETRICIDADE APLICADA"},
  // {codigo: "FGA0088", nome: "TEORIA DE SISTEMAS DE CONVERSÃO DE ENERGIA"},
  // {codigo: "FGA0089", nome: "LABORATÓRIO DE SISTEMAS DE CONVERSÃO DE ENERGIA"},
  // {codigo: "FGA0090", nome: "ONDULATÓRIA E FÍSICA TÉRMICA PARA ENGENHARIA"},
  // {codigo: "FGA0091", nome: "MÁQUINAS DE FLUIDO"},
  // {codigo: "FGA0092", nome: "PRINCÍPIOS DE COMUNICAÇÃO PARA ENGENHARIA"},
  // {codigo: "FGA0093", nome: "PRINCÍPIOS DE CONTROLE"},
  // {codigo: "FGA0096", nome: "ELETRÔNICA EMBARCADA"},
  // {codigo: "FGA0098", nome: "PRÁTICA DE CIRCUITOS ELETRÔNICOS 3"},
  // {codigo: "FGA0099", nome: "TEORIA DE CIRCUITOS ELETRÔNICOS 3"},
  // {codigo: "FGA0100", nome: "PRÁTICA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS"},
  // {codigo: "FGA0101", nome: "TEORIA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS"},
  // {codigo: "FGA0102", nome: "SINAIS E SISTEMAS PARA ENGENHARIA"},
  // {codigo: "FGA0103", nome: "SISTEMAS OPERACIONAIS EMBARCADOS"},
  // {codigo: "FGA0104", nome: "QUÍMICA ORGÂNICA APLICADA À ENGENHARIA"},
  // {codigo: "FGA0105", nome: "TÓPICOS ESPECIAIS 2 EM ENGENHARIA AEROESPACIAL"},
  // {codigo: "FGA0106", nome: "TÓPICOS ESPECIAIS 3 EM ENGENHARIA AEROESPACIAL"},
  // {codigo: "FGA0107", nome: "LABORATÓRIO DE ONDULATÓRIA E FÍSICA TÉRMICA PARA A ENGENHARIA"},
  // {codigo: "FGA0108", nome: "MATEMÁTICA DISCRETA 2"},
  // {codigo: "FGA0109", nome: "FUNDAMENTOS DE SISTEMAS EMBARCADOS"},
  // {codigo: "FGA0119", nome: "TEORIA DE ELETROMAGNETISMO"},
  // {codigo: "FGA0120", nome: "PRÁTICA DE ELETROMAGNETISMO"},
  // {codigo: "FGA0121", nome: "TÓPICOS ESPECIAIS 4 EM ENGENHARIA AEROESPACIAL"},
  // {codigo: "FGA0124", nome: "PROJETO DE ALGORITMOS"},
  // {codigo: "FGA0130", nome: "REGULAÇÃO AMBIENTAL NO SETOR ENERGÉTICO"},
  // {codigo: "FGA0131", nome: "ENGENHARIA DE SOFTWARE AUTOMOTIVO"},
  // {codigo: "FGA0132", nome: "INSTRUMENTAÇÃO ELETRÔNICA PARA ENGENHARIA"},
  // {codigo: "FGA0133", nome: "ENGENHARIA ECONÔMICA"},
  // {codigo: "FGA0134", nome: "TÓPICOS ESPECIAIS DE ENGENHARIA DE SOFTWARE"},
  // {codigo: "FGA0137", nome: "SISTEMAS DE BANCO DE DADOS 1"},
  // {codigo: "FGA0138", nome: "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE"},
  // {codigo: "FGA0141", nome: "GESTÃO AMBIENTAL NO SETOR ENERGÉTICO"},
  // {codigo: "FGA0142", nome: "FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES"},
  // {codigo: "FGA0147", nome: "ESTRUTURA DE DADOS E ALGORITMOS"},
  // {codigo: "FGA0148", nome: "ENGENHARIA DE SEGURANÇA DO TRABALHO"},
  // {codigo: "FGA0150", nome: "PROJETO INTEGRADOR DE ENGENHARIA 1"},
  // {codigo: "FGA0152", nome: "ERGONOMIA DO PRODUTO"},
  // {codigo: "FGA0154", nome: "MECANICA DOS SÓLIDOS 1 PARA ENGENHARIA"},
  // {codigo: "FGA0155", nome: "INTRODUÇÃO AO DESIGN E CONCEPÇÃO DE VEÍCULOS"},
  // {codigo: "FGA0156", nome: "COMBUSTÍVEIS E BIOCOMBUSTÍVEIS"},
  // {codigo: "FGA0157", nome: "PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA"},
  // {codigo: "FGA0158", nome: "ORIENTAÇÃO A OBJETOS"},
  // {codigo: "FGA0160", nome: "MÉTODOS NUMÉRICOS PARA ENGENHARIA"},
  // {codigo: "FGA0161", nome: "ENGENHARIA E AMBIENTE"},
  // {codigo: "FGA0163", nome: "INTRODUÇÃO À ENGENHARIA"},
  // {codigo: "FGA0164", nome: "HUMANIDADES E CIDADANIA"},
  // {codigo: "FGA0166", nome: "ELEMENTOS E MÉTODOS EM ELETRÔNICA"},
  // {codigo: "FGA0167", nome: "SISTEMAS AUTOMOTIVOS"},
  // {codigo: "FGA0168", nome: "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR"},
  // {codigo: "FGA0169", nome: "FONTES DE ENERGIA E TECNOLOGIAS DE CONVERSÃO"},
  // {codigo: "FGA0170", nome: "FUNDAMENTOS DE SISTEMAS OPERACIONAIS"},
  // {codigo: "FGA0172", nome: "REQUISITOS DE SOFTWARE"},
  // {codigo: "FGA0173", nome: "INTERAÇÃO HUMANO COMPUTADOR"},
  // {codigo: "FGA0174", nome: "DESENVOLVIMENTO SUSTENTÁVEL"},
  // {codigo: "FGA0175", nome: "ENGENHARIA DE PETRÓLEO E GÁS"},
  // {codigo: "FGA0177", nome: "ANÁLISE INSTRUMENTAL DE COMBUSTÍVEIS"},
  // {codigo: "FGA0179", nome: "MECANICA DOS SÓLIDOS 2 PARA ENGENHARIA"},
  // {codigo: "FGA0184", nome: "GESTÃO DA PRODUÇÃO E QUALIDADE"},
  // {codigo: "FGA0188", nome: "MÉTODOS EXPERIMENTAIS PARA ENGENHARIA"},
  // {codigo: "FGA0190", nome: "PROJETO DE ELEMENTOS AUTOMOTIVOS"},
  // {codigo: "FGA0191", nome: "MATERIAIS COMPOSTOS E PLÁSTICOS"},
  // {codigo: "FGA0194", nome: "ARQUITETURA DE MOTORES DE COMBUSTÃO INTERNA"},
  // {codigo: "FGA0195", nome: "GESTÃO DA PRODUÇÃO AUTOMOTIVA"},
  // {codigo: "FGA0198", nome: "PROJETO COM CIRCUITOS RECONFIGURAVEIS"},
  // {codigo: "FGA0204", nome: "DINÂMICA DOS FLUÍDOS"},
  // {codigo: "FGA0206", nome: "ENGENHARIA DE PRODUTO DE SOFTWARE"},
  // {codigo: "FGA0208", nome: "ARQUITETURA E DESENHO DE SOFTWARE"},
  // {codigo: "FGA0210", nome: "PARADIGMAS DE PROGRAMAÇÃO"},
  // {codigo: "FGA0211", nome: "FUNDAMENTOS DE REDES DE COMPUTADORES"},
  // {codigo: "FGA0214", nome: "TÓPICOS ESPECIAIS EM ENGENHARIA AUTOMOTIVA"},
  // {codigo: "FGA0219", nome: "PROCESSAMENTO DE SINAIS"},
  // {codigo: "FGA0221", nome: "INTELIGÊNCIA ARTIFICIAL"},
  // {codigo: "FGA0226", nome: "ELETRÔNICA VEICULAR"},
  // {codigo: "FGA0228", nome: "PROJETO DE SISTEMAS AUTOMOTIVOS"},
  // {codigo: "FGA0229", nome: "ANÁLISE ESTRUTURAL MÉTODO DOS ELEMENTOS FINITOS"},
  // {codigo: "FGA0230", nome: "DINÂMICA DE VEÍCULOS"},
  // {codigo: "FGA0232", nome: "INTEGRAÇÃO E TESTES"},
  // {codigo: "FGA0236", nome: "BIORREFINARIAS"},
  // {codigo: "FGA0238", nome: "TESTES DE SOFTWARE"},
  // {codigo: "FGA0240", nome: "GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE"},
  // {codigo: "FGA0242", nome: "TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES"},
  // {codigo: "FGA0244", nome: "PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS"},
  // {codigo: "FGA0250", nome: "PROJETO INTEGRADOR DE ENGENHARIA 2"},
  // {codigo: "FGA0251", nome: "CENTRAIS DE GERAÇÃO TERMOELÉTRICA"},
  // {codigo: "FGA0252", nome: "SISTEMAS HIDROELÉTRICOS"},
  // {codigo: "FGA0254", nome: "CIÊNCIAS AEROESPACIAIS"},
  // {codigo: "FGA0258", nome: "INSTRUMENTAÇÃO BIOMÉDICA 2"},
  // {codigo: "FGA0261", nome: "TÓPICOS ESPECIAIS EM ELETRONICA"},
  // {codigo: "FGA0262", nome: "TRANSMISSÃO E DISTRIBUIÇÃO DE ENERGIA ELÉTRICA"},
  // {codigo: "FGA0265", nome: "ECONOMIA DE ENERGIA"},
  // {codigo: "FGA0266", nome: "ACÚSTICA E VIBRAÇÕES VEICULARES"},
  // {codigo: "FGA0267", nome: "PROJETO DE ESTRUTURAS DE VEICULOS"},
  // {codigo: "FGA0270", nome: "SISTEMAS HIDRÁULICOS E PNEUMÁTICOS"},
  // {codigo: "FGA0274", nome: "PRODUTIVIDADE E PROFISSIONALISMO EM ENGENHARIA DE SOFTWARE"},
  // {codigo: "FGA0278", nome: "QUALIDADE DE SOFTWARE 1"},
  // {codigo: "FGA0280", nome: "PROJETO DE CIRCUITOS ELETRÔNICOS INTEGRADOS 2"},
  // {codigo: "FGA0284", nome: "ENGENHARIA DE MANUTENÇÃO"},
  // {codigo: "FGA0285", nome: "INTRODUÇÃO À MECÂNICA DA FRATURA"},
  // {codigo: "FGA0286", nome: "FUNDAMENTOS DO MÉTODO DOS ELEMENTOS FINITOS"},
  // {codigo: "FGA0291", nome: "MECÂNICA DE ESTRUTURAS AERONÁUTICAS"},
  // {codigo: "FGA0292", nome: "INTRODUÇÃO À FOTÔNICA E OPTRÔNICA"},
  // {codigo: "FGA0301", nome: "INSTALAÇÕES ELÉTRICAS EM SISTEMAS DE ENERGIA"},
  // {codigo: "FGA0380", nome: "PROCESSOS ESTOCÁSTICOS"},
  // {codigo: "MAT0025", nome: "CÁLCULO 1"},
  // {codigo: "MAT0026", nome: "CÁLCULO 2"},
  // {codigo: "MAT0027", nome: "CÁLCULO 3"},
  // {codigo: "MAT0031", nome: "INTRODUCAO A ALGEBRA LINEAR"},
  // {codigo: "IFD0171", nome: "FISICA 1"},
  // {codigo: "IFD0173", nome: "FISICA 1 EXPERIMENTA"},
]

export default todasAsMaterias
