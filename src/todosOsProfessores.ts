const todosOsProfessores = [
  // {
  //     "email": "adson@unb.br",
  //     "nome": "Adson Ferreira da Rocha",
  //     "bio": "Possui graduação em Engenharia Elétrica pela Universidade de Brasília (1988), mestrado em Engenharia Elétrica pela Universidade Estadual de Campinas (1991) e doutorado em Engenharia Biomédica pela University Of Texas At Austin (1997). Realizou estágio pós-doutoral no Politecnico di Torino (2005). Atualmente é Professor Associado da Universidade de Brasília, assessor ad hoc do CNPq, da CAPES e das Fundações de Amparo à Pesquisa do DF, de São Paulo, do Rio de Janeiro, de Minas Gerais, de Mato Grosso, do Rio Grande do Sul, do Espírito Santo e de Pernambuco. Participa da Comissão para avaliação dos programas de pós-graduação das Engenharias 4, da CAPES, desde o ano de 2010. É revisor das revistas Physics in Medicine and Biology, Physiological Measurement, Medical Engineering & Physics, Biomedical Engineering Online, IEEE América Latina e Revista Brasileira de Engenharia Biomédica. Foi presidente da seção Brasília do IEEE de abril de 2005 a abril de 2007 e vice-presidente no biênio anterior. Foi vice-presidente da Sociedade Brasileira de Engenharia Biomédica nos biênios de 2006 a 2008 e de 2008 a 2010. Foi sub-chefe e coordenador de pós-graduação do Departamento de Engenharia Elétrica da UnB. Foi o Presidente da Comissão Científica do XXI Congresso Brasileiro de Engenharia Biomédica. Foi co-chair do tema Signal Processing and Physiological System Modeling, do 32nd Annual International Conference of the IEEE Engineering in Medicine and Biology Society e coordenador de tema em vários congressos científicos nacionais. Tem experiência na área de Engenharia Biomédica, atuando principalmente em processamento de sinais biomédicos e instrumentacao biomédica. Tem experiência na área de processamento de sinais eletrocardiográficos e eletromiográficos, e em aplicações que envolvem fenômenos de transferência de calor. Publicou 20 artigos em 11 diferentes periódicos científicos, 154 artigos completos e 11 artigos resumidos em congressos nacionais e internacionais, 4 capítulos de livro internacional e 2 capítulos de livro nacional. Orientou 5 teses de doutorado, co-orientou 1 tese de doutorado, orientou 13 dissertações de mestrado, 18 projetos de iniciação científica e 59 projetos de final de curso. Foi conselheiro de diversos Conselhos e Câmaras superiores da Universidade de Brasília (CPP, CEPE, CAD e CONSUNI). Coordenou o grupo que iniciou o processo de criação da Faculdade UnB Gama, um novo campus avançado da Universidade de Brasília, e participa da equipe de construção do Campus desde então. Integrou a equipe que propôs o curso de Engenharia de Computação na Universidade de Brasília. Coordenou, junto com a Professora Lourdes Mattos Brasil, a equipe que propôs a criação do curso se mestrado em Engenharia Biomédica na Faculdade UnB Gama. De agosto de 2008 a setembro de 2010 foi o Coordenador Acadêmico da Faculdade UnB Gama."
  //   },
  //   {
  //     "email": "abso@unb.br",
  //     "nome": "Alessandro Borges Sousa Oliveira",
  //     "bio": "Possui graduação em Engenharia Mecânica pela Universidade de Brasília (1994), mestrado em Engenharia Mecânica pela Universidade de Brasília (1997) e doutorado em Ecole Doctorale - Ecole Nationale Supérieure D'arts Et Métiers (2004). É professor adjunto da Universidade de Brasília. Tem experiência na área de Engenharia Mecânica, com ênfase em Calibração Dinâmica, atuando principalmente nos seguintes temas: calibração dinâmica, motores de combustão interna, metrologia, aquisição de sinais e tubo de choque, vibrações, projetos de sistemas mecânicos, CAD, Elementos finitos, Manutenção de Máquinas. Desde 1997 é coordenador do Projeto Baja SAE da UnB . Atualmente é Diretor do Campus da UnB no Gama, onde são ministrados os cursos de Engenharia Aeroespacial,Engenharia Automotiva, Engenharia de Energia, Engenharia Eletrônica e Engenharia de software."
  //   },
  //   {
  //     "email": "andre.lanna@gmail.com",
  //     "nome": "André Luiz Peron Martins Lanna",
  //     "bio": "Possui graduação em Ciência da Computação pela Pontifícia Universidade Católica de Minas Gerais (2006) e mestrado em Engenharia Elétrica pela Pontifícia Universidade Católica de Minas Gerais (2009). Atualmente é professor assistente e aluno de doutorado da Universidade de Brasília. Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software, atuando principalmente nos seguintes temas: reuso de softrware, linhas de produto de software, qualidade de software e processo de software."
  //   },
  //   {
  //     "email": "andreiaacosta@unb.br",
  //     "nome": "Andréia Alves Costa",
  //     "bio": "Graduada em Química pela Universidade de Brasília (Bacharel em 2003 e Licenciada em 2006), e Mestre em Química pela mesma instituição (2006). Concluiu o doutorado em Química pela Universidade de Brasília (2011), participando em um projeto de doutorado Sandwiche (2009-2010) na University of Central Florida (USA). Experiência na área de Química Inorgânica com ênfase em Catálise, atuando principalmente na aplicação de catalisadores suportados em reações de oxidação, reações de esterificação para produção de biodiesel e reações de adsorção envolvendo hidrocarbonetos policíclicos aromáticos. Atualmente, trabalha como professora na Faculdade UnB-Gama (FGA) na área de Engenharia de Energia com ênfase em atividades envolvendo a área de Processamento de Petróleo e Gás."
  //   },
  //   {
  //     "email": "andrianov@unb.br",
  //     "nome": "Artem Andrianov",
  //     "bio": "Formado pela Universidade Nacional de Dnipropetrovsk (Ucrânia) com diploma de Mestrado em Ferramenta de Máquinas e Sistemas (2002). Ph.D. em Ciência dos Materiais (de gestão dos resíduos radioactivos e da radiação) na mesma instituição (2008). Leccionou as disciplinas de tecnologia aeroespacial como professor associado da Universidade Nacional de Dnipropetrovsk e estudou problemas de conversão de tecnologia aeroespacial para a gestão dos resíduos radioactivos como o principal especialista do Centro Aeroespacial da Educação Nacional da Juventude (Ucrânia). Possui experiência no desenvolvimento de materiais compósitos para blindagem de sistemas eletrônicos de satélites contra radiação espacial ionizante. Atualmente é professor da Universidade de Brasília (Campus Gama) no curso de Engenharia Aeroespacial, ministrando disciplinas e desenvolvendo pesquisas nas áreas de Mecânica de Estruturas Aeroespaciais e Projeto de Sistemas Aeroespaciais. "
  //   },
  //   {
  //     "email": "bertoldi@unb.br ",
  //     "nome": "Prof.Artur Elias de Morais Bertoldi",
  //     "bio": "Possui graduação em Física pela Universidade Federal de São Carlos (2004) e mestrado em Ciências Mecânicas pela Universidade de Brasília (2007). Atualmente é professor Assistente da Universidade de Brasília. Tem experiência na área de Engenharia Aeroespacial, com ênfase em propulsão de foguetes, atuando principalmente nos seguintes temas: Sistemas Propulsivos Híbridos, combustíveis híbridos a base de hidrocarbonetos de cadeia longa, instabilidade de combustão em motores de foguete a propelente híbrido."
  //   },
  //   {
  //     "email": "ambrasil@unb.br",
  //     "nome": "Augusto César de Mendonça Brasil",
  //     "bio": "Possui graduação em Engenharia Mecânica pela Universidade Federal do Pará (1988), mestrado em Engenharia Ambiental pela Universidade Federal do Espírito Santo (1992), doutorado em Engenharia Mecânica pelo Instituto Superior Técnico da Universidade Técnica de Lisboa (2000) e Pós Doutorado pelo Instituto Superior Técnico na área de Consumo Energético e Emissão de Poluentes de Veículos de Transportes. Atualmente é professor associado da Universidade de Brasília. Tem experiência na área de Engenharia Mecânica, Engenharia Ambiental e Engenharia de Energia. Atua principalmente nos seguintes temas: transportes e energia, biomassa como fonte energética, poluição atmosférica, consumos e emissões dos transportes e combustíveis alternativos."
  //   },
  //   {
  //     "email": "anflor@unb.br",
  //     "nome": "Carla Tatiana Mota Anflor",
  //     "bio": "Possui graduação em Engenharia Mecânica pela Universidade de Passo Fundo (2000), mestrado em Engenharia Mecânica pela Universidade Federal do Rio Grande do Sul (2003) e doutorado em Engenharia Mecânica pela Universidade Federal do Rio Grande do Sul (2007). Atualmente é Professora da Engenharia Automotiva pela Universidade de Brasília, Campus do Gama. Possui conhecimento na área de vibrações mecânicas e tratamentos de dados estocásticos empregando técnicas de análise espectral em sinais. Seu tema principal de atuação refere-se à pesquisa de desenvolvimento de métodos numéricos para problemas de otimização em sólidos empregando elementos de contorno. Membro integrante do Grupo de Mecânica Experimental e Computacional (GMEC) da Universidade de Brasília. Docente credenciado aos Programas de Pós-Graduação em Ciências Mecânicas e Pós-Graduação em Integridade de Materiais da Engenharia."
  //   },
  //   {
  //     "email": "rocha.carla@gmail.com/caguiar@unb.br",
  //     "nome": "Carla Silva Rocha Aguiar",
  //     "bio": "Carla Rocha é docente na Universidade de Brasília (UnB), no curso de Engenharia de Software. É pesquisadora e uma das coordenadoras do Laboratório Avançado de Produção Pesquisa e Inovação de Software (LAPPIS). Obteve seu doutorado em 2009 pelo LIRMM (Laboratoire d'Informatique, de Robotique et de Microélectronique de Montpellier), na área de processamento de imagens de profundidade no contexto de restauração e herança cultural. Possui graduação em Engenharia Mecatrônica (2005) pela Universidade de Brasília (UnB). Suas áreas de pesquisa e interesses são: métodos colaborativos e empíricos de desenvolvimento software, ecossistema das comunidades de software livre, mineração de repositórios de software, assistentes conversacionais (chatbots), DevOps, MLOps, educação, diversidade e minorias em Engenharia de Software."
  //   },
  //   {
  //     "email": "chantal@aerospace.unb.br ",
  //     "nome": "Chantal Cappelletti",
  //     "bio": "●\tDoutorado em  Engenharia Aeroespacial  - Scuola di Ingegneria Aerospaziale, Università di Roma Sapienza. ●\tMestrado em Engenharia Astronáutica -Scuola di Ingegneria Aerospaziale, Università di Roma Sapienza. Atuação profissional ●\tÉ Professor Adjunto (desde fevereiro 2013) em Sistemas Aeroespaciais na Faculdade do Gama, Universidade de Brasília - UnB, DF, Brasil. ●\tÉ membro eleito da IAA- International Academy of Astronautics ●\tÉ Sócio fondator da empresa GAUSS Srl (Itália). ●\tFoi Responsável do projeto SERPENS. ●\tFoi delegado da Agência Espacial Italiana no IADC (Inter- Agency Debris Committee) [2006-2012] ●\tPrêmio \"I Guidoniani\", Associação Italiana de Medicina Espacial (AIMAS) pela melhor pesquisa em biomedicina aeroespacial (área de engenharia) [2012] Experiência ●\tTem experiência na área de Engenharia Aeroespacial, com ênfase em Sistemas, Mecânica do Vôo Espacial, Projeto de Sistemas, Space Debris, Astrodinâmica ●\t12 anos de experiência em projetação de pequeno satélites, sendo Project Manager de 5 satélites (EduSat, UniCubeSat-GG, UniSat-5, SERPENS, TUPOD) e Principal Investigator do satélite UniSat-6. ●\tNa área de biomedicina aeroespacial fui o PI da duas missões GlioLab-0 lançados no espaço com o Space Shuttle no 2011 com as missões STS-134 e STS-135 ●\tPesquisador visitante na Morehead State University (2009-2012) ●\tPorfessor Assistente no curso de alta formação \"High-Level Postgraduate Advanced Course in Aerospace Engineering\"- Università di Roma- Sapienza ●\tAutor de mais de 30 pubblicações na area."
  //   },
  //   {
  //     "email": "vendittozzi@aerospace.unb.br",
  //     "nome": "Cristian Vendittozzi",
  //     "bio": "Possui mestrado em Engenharia Aeroespacial (2009), e doutorado em Engenharia de Materiais pela Sapienza, Universidade de Roma, Italia (2013) e completou a formação com um Mestrado em Administração de Empresas, (Executive MBA), pelo MIP, a business school do Politecnico di Milano (2014). Atualmente é professor adjunto da Universidade de Brasília - Faculdade UnB Gama nas áreas de Engenharia Aeroespacial e Automotiva. De 2007 para 2014 foi membro da equipe de desenho e desenvolvimento da missão espacial LARES. O satélite LARES foi colocado em órbita em fevereiro de 2012. Neste período, as principais tarefas realizadas foram: Projeto do Corpo Satellite (Qualification Model e Flight Model). Projeto de sistema de montagem de bordo para os Corne Cube Reflectors (CCR). Projeto do MGSE (equipamentos mecânicos de terra para o satellite). De 2010 a 2015 participou em vários projectos multidisciplinares: o Prin2008 (PRojeto de Interesse Nacional, financiado do Ministério da Universidade e da Pesquisa Italiano) e dois projetos de pós-doutorado (2013-2014 e 2014-2015), no departamento de engenharia de materiais, química e ambiente da Universidade Sapienza de Roma. É o autor de um livro, mais de trinta artigos científicos e duas patentes italianas."
  //   },
  //   {
  //     "email": "cristianeSramos@unb.br",
  //     "nome": "Cristiane Soares Ramos",
  //     "bio": "Professora Assistente na Faculdade Gama (FGA) da Universidade de Brasília (UnB), curso de Engenharia de Software. Doutoranda em Engenharia de Sistemas e Computação (COPPE/UFRJ). Mestre em Gestão do Conhecimento e Tecnologia da Informação área de concentração: Engenharia de software; Bacharel em Ciência da Computação e Tecnóloga em Processamento de Dados, pela Universidade Católica de Brasília. É credenciada pela Softex como Implementadora e Avaliadora do MPS.BR. Tem experiência em: desenvolvimento de software; gerência de projetos; implantação de processos segundo os modelos MR-MPS e CMMI-DEV; e avaliação segundo o MA-MPS / SCAMPI. Experiência em definição e melhoria de processos de software, implantação dos modelos de qualidade CMMI / MPS.BR, auditorias de qualidade e avaliação independente de garantia da qualidade de processo e produto. Exerce atividades como docente desde 2005 em cursos de pós-graduação ministrando disciplinas relacionadas à Qualidade de Software e Melhoria de Processos de Software."
  //   },
  //   {
  //     "email": "jacques.unb@gmail.com",
  //     "nome": "Cristiano Jacques Miosso",
  //     "bio": "Professor Adjunto da Faculdade do UnB Gama desde 24/03/2011. Doutor em Engenharia Elétrica e de Computação pela Universidade do Texas em El Paso (UTEP), possui ainda mestrado em Engenharia Elétrica pela Universidade de Brasília (2001). Graduou-se por esta universidade em 1999, quando recebeu o prêmio de melhor aluno de graduação do departamento de Engenharia Elétrica. Suas áreas de interesse incluem processamento estatístico de sinais, compressive sensing, imageamento, ressonância magnética, processos estocásticos, aprendizagem de máquina e teoria de comunicação digital. Pelo seu trabalho de doutoramento, recebeu, em 2011, o prêmio de melhor aluno de doutorado do departamento de Engenharia Elétrica e de Computação, da UTEP, o prêmio de melhor tese de doutorado do mesmo departamento, e o prêmio de melhor tese de doutorado de toda a UTEP, incluindo todas as áreas de ciências exatas e ciências da saúde."
  //   },
  //   {
  //     "email": "caabreu@gmail.com",
  //     "nome": "Cristina de Abreu Silveira",
  //     "bio": "Possui graduação em Engenharia Elétrica pela Universidade Federal da Bahia (1979 - Eletrotécnica e 1986 - Eletrônica), graduação em Musicoterapia pela Universidade Católica do Salvador (1997), especialização em Tecnologia Digital pela Universidade Federal da Bahia (1993), especialização em Proteção de Sistemas de Geração e Transmissão pela Companhia Energética de São Paulo (1984), (bolsista do MEC/CEDATE pelo CENTEC), especialização em Equipamentos AT- Compensação Estática - Harmônicos na Siemens AG (bolsista pela Cooperação Técnica Internacional Brasil-Alemanha Fundação Carl Duisberg) Erlangen, Alemanha (1982/1983). Possui Mestrado em Engenharia Elétrica pela Universidade Federal da Bahia (1999) e Doutorado em Engenharia Elétrica pela Universidade Federal de Pernambuco (2004). Atuou como docente do 3º grau - Professora Associada 2 - no Instituto Federal de Educação, Ciência e Tecnologia da Bahia (ex-CEFET-BA) desde 1980 onde lecionou disciplinas do curso de Engenharia Industrial Elétrica e atua em projetos de pesquisa e desenvolvimento em parceria com outras instituições até 09 de dezembro de 2011, quando pediu vacância de seu cargo por posse em cargo inacumulável na Universidade de Brasília - Faculdade do Gama. Tem experiência profissional em Processamento de Energia e Sistemas Elétricos, atuando principalmente nas áreas de: compatibilidade eletromagnética, transitórios eletromagnéticos, interferência eletromagnética, eficiência energética, qualidade da energia elétrica e sistemas de aterramento. É membro do IEEE-BA, tendo sido Conselheira do Ramo Estudantil do IEEE/IFBA até 2011 e presidente do Capítulo de Aplicações Industriais no biênio 2010-2011. Foi Conselheira do CREA-BA pelo IFBA no período 2009-2011, Coordenadora da Câmara Especializada de Engenharia Elétrica do CREA-BA em 2010 e 2011 e Coordenadora Nacional das Câmaras /especializadas de Engenharia Elétrica do Sistema CONFEA/CREAs em 2011. Foi Membro do Colegiado do Curso de Engenharia Industrial Elétrica do IFBA de 2007 a 2009 e é professora colaboradora do Programa de Pós-Graduação em Engenharia Elétrica da Universidade Federal da Bahia. Atualmente encontra-se em estágio probatório na UnB - Campus Gama, como docente da área de Engenharia de Energia lecionando disciplinas da área de Sistemas Elétricos de Potência"
  //   },
  //   {
  //     "email": "danielrosa@unb.br",
  //     "nome": "Daniel Monteiro Rosa",
  //     "bio": "possui graduação em Engenharia Mecânica pela Universidade Federal do Pará (2002), graduação em Tecnologia em Processamento de Dados pelo Centro de Ensino Superior do Pará (1994), mestrado em Engenharia Mecânica pela Universidade Estadual de Campinas (2004) e doutorado em Engenharia Mecânica pela Universidade Estadual de Campinas (2007). Tem experiência na área de Engenharia de Materiais e Metalúrgica, com ênfase em Propriedades Mecânicas dos Metais e Ligas, atuando principalmente nos seguintes temas: espaçamentos dendríticos, solidificação unidirecional descendente, convecção no líquido, ligas sn-pb e macroestrutura."
  //   },
  //   {
  //     "email": "diogogarcia(at)unb.br",
  //     "nome": "Diogo Caetano Garcia",
  //     "bio": "Professor adjunto da Universidade de Brasília, Campus Gama. Possui graduação em Engenharia Elétrica (2006), mestrado em Engenharia Elétrica (2007) e doutorado em Engenharia Elétrica (2012), todos pela Universidade de Brasília. Atuou em projetos de pesquisa e desenvolvimento junto a diversas empresas e órgãos governamentais, tais como a Eletrobrás Eletronorte, Hewlett-Packard Brasil, Petrobrás e Samsung Research Brasil. Foi engenheiro de manutenção eletrônica na Eletronorte em 2007, e professor no Instituto Federal de Brasília (IFB) em 2011. Tem experiência em processamento digital de sinais, atuando principalmente em compressão de imagem e video, processamento 3D e de múltiplas vistas, super-resolução e qualidade de energia."
  //   },
  //   {
  //     "email": "domenico.simone@aerospace.unb.br",
  //     "nome": "Domenico Simone",
  //     "bio": "Possui graduação (BSc+MSc) em Engenharia Aeronáutica pela University of Rome \"Sapienza\", e doutorado (PhD)  em Theoretical and Applied Mechanics pela University of Rome \"Sapienza\". Atualmente é Professor Adjunto da Universidade de Brasília. Tem experiência na área de Engenharia Aeroespacial, com ênfase em Propulsão Aeroespacial, atuando principalmente na Propulsão Química Espacial (Foguetes solidos, liquidos e Híbridos) e Aeronáutica, com ênfase em modelagem numérica de escoamentos reativos em Ramjet e Scramjet"
  //   },
  //   {
  //     "email": "eberthcorrea@gmail.com",
  //     "nome": "Eberth de Almeida Corrêa",
  //     "bio": "Possui graduação em Bacharel em Física pela Universidade de Brasília (1999), mestrado em Física pela Universidade de Brasília (2002) e doutorado em Física pela Universidade de Brasília (2006). Atualmente é professor adjunto da Universidade de Brasília Campus Gama-UnB-FGA. Seu principal interesse é na parte de simulações numéricas aplicadas à Física. Tem experiência na área de Física, com ênfase em Supercondutividade, atuando principalmente nos seguintes temas: Simulação Computacional, Grupo de Renormalização e Cálculos de Monte Carlo Clássico e Quântico."
  //   },
  //   {
  //     "email": "ecosta@unb.br",
  //     "nome": "Edgard Costa Oliveira",
  //     "bio": "Professor Adjunto da Universidade de Brasília, UnB, Campus Gama, cursos de graduação em Engenharia. Doutor e Mestre em Ciência da Informação pela UnB/CID (2006 e 2001). Pesquisador e professor em disciplinas: humanidades, engenharia de software, gerenciamento de projetos de TI, planejamento de sistemas de informação, produção de documentos e análise da informação. 20 anos de experiência profissional e de pesquisa em TI, com ênfase em segurança da informação, gestão de riscos, engenharia de software, gerenciamento de projetos e organização da informação."
  //   },
  //   {
  //     "email": "cueva@unb.br",
  //     "nome": "Gustavo Cueva Galárraga",
  //     "bio": "Possui graduação em Engenharia Mecânica pela Escuela Politécnica Nacional de Quito, Equador (1993), mestrado em Engenharia Metalúrgica e de Materiais pela Universidade de São Paulo (1997), doutorado em Engenharia Metalúrgica e de Materiais pela Universidade de São Paulo (2002), e pós doutorado em Engenharia Mecânica pela Universidade de São Paulo (2005 e 2008). Atualmente é professor adjunto da Universidade de Brasília - Faculdade Gama. Tem experiência na área de Engenharia Metalúrgica e de Materiais, com ênfase em Estrutura dos Metais e Ligas, Transformação de Fase e Tratamentos Térmicos, atuando principalmente nos seguintes temas: desgaste de materiais por deslizamento, abrasão e erosão-cavitação, particularmente de ferros fundidos e aços carbono."
  //   },
  //   {
  //     "email": "edna.canedo@gmail.com",
  //     "nome": "Edna Dias Canedo",
  //     "bio": "Doutora em Engenharia Elétrica pela Universidade de Brasília (UNB). Área de concentração: Telecomunicações. título concedido em 15.08.2012. Mestre pela Universidade Federal da Paraíba UFPB. Área de concentração: Sistemas de Software. Área Especifica: Engenharia de Software, título concedido em 29.08.2002. Graduada em Análise de Sistemas pela Universidade Salgado de Oliveira; Goiás (1999). Professora do curso de Engenharia de Software da Faculdade FGA Gama, da Universidade de Brasília UNB. Atua na área de desenvolvimento de sistemas desde 1998, tendo trabalhado como Analista de Sistemas na Empresa de Processamento de Dados do Estado de Goiás Prodago, até o ano de 2000. Em Brasília atuou na Poliedro como Consultora de Desenvolvimento e Gerência de Projetos e como Analista de Sistemas Pleno em Desenvolvimento na ECT - Empresa de Correios e Telégrafos até abril de 2010, desenvolvendo atividades na área de Governança em Tecnologia da Informação na implantação do framework COBIT. Desde 2000 dedica-se a atividades de docência universitária nos cursos de graduação e pós-graduação, atuando na área de Sistemas de Software, Redes de Petri, Engenharia de Software, Orientação a Objetos, Gerência de Projetos, Teste de Software, Arquitetura Orientada a Serviços, Programação e Governança em Tecnologia da Informação."
  //   },
  //   {
  //     "email": "mintsu@unb.br",
  //     "nome": "Edson Mintsu Hung",
  //     "bio": "Possui graduação, mestrado e doutorado pelo Departamento de Engenharia Elétrica da Universidade de Brasília. Atualmente é professor e coordenador de Engenharia Eletrônica na Universidade de Brasília no campus do Gama. Tem experiência na área de Engenharia Elétrica, com ênfase em Processamento de Sinais e Eletrônica, atuando principalmente nos seguintes temas: compressão de imagem, compressão de vídeo, processamento de imagens, sistemas embarcados e implementação de sistemas criptográficos (em software, hardware e firmware)."
  //   },
  //   {
  //     "email": "elainevenson@unb.br",
  //     "nome": "Elaine Venson",
  //     "bio": " Professora do Curso de Engenharia de Software da Faculdade Gama (FGA), da Universidade de Brasília (UnB), vinculada ao CQTS (Centro de Qualidade e Testes de Software). Possui graduação e mestrado em Ciências da Computação pela Universidade Federal de Santa Catarina. Atuou por 10 anos no mercado de Engenharia de Software nas áreas de engenharia de requisitos, métricas de software, gestão de projetos e melhoria de processos. Exerceu cargos como coordenadora de grupos de analistas de requisitos, gerente de projeto, gerente de fábrica de software, especialista e coordenadora de métricas. Integrou equipes de definição de processos e avaliação de nível de maturidade CMMI. Participou ativamente de projetos de software de grande porte em organizações como Petrobras, Vale, Bank Boston e CAIXA Econômica Federal. "
  //   },
  //   {
  //     "email": "emmanuel@unb.br",
  //     "nome": "Emmanuel Pacheco Rocha Lima",
  //     "bio": "Possui graduação em Engenharia Mecânica pela Universidade Federal de Pernambuco (1999), mestrado em Engenharia Mecânica pela Universidade Federal de Pernambuco (2002) e doutorado em Ciências na Área de Tecnologia Nuclear Materiais pelo Instituto de Pesquisas Energéticas e Nucleares - IPEN (2008). Tem experiência na área de Engenharia de Materiais e Metalúrgica, com ênfase em materiais metálicos, atuando principalmente nos seguintes temas: ligas de alumínio de alta formabilidade, cinética de recristalização, transformação de fases, decomposição em ligas de alumínio, evoluçao e controle microestrutural, aços rápidos, metalurgia do pó, sinterização e tratamentos termomecânicos. Atualmente é Professor Adjunto e Coordenador de Graduação do curso de Engenharia Automotiva da Universidade de Brasília Campus Gama - FGA/UnB"
  //   },
  //   {
  //     "email": "eneidagv@unb.br",
  //     "nome": "Eneida Gonzalez Valdes",
  //     "bio": "Possui graduação em Engenharia Mecânica pelo Instituto Superior Politecnico Jose Antonio Echevarria (1984) e mestrado em Engenharia Mecânica pela Universidade de Brasília (1999). Tem experiência na área de Engenharia Mecânica, com ênfase em Projetos de Engenharia Mecânica, atuando principalmente em Projeto de Sistemas Mecânicos, Desenvolvimento de Equipamentos (produtos) e Projetos Industriais. Dezenove anos de experiência como professora universitária, ministrando diferentes disciplinas tais como: Desenho Técnico, Desenho de Arquitetura, Geometria Descritiva, Processos de Fabricação Mecânica, Mecânica Geral, Introdução a Robótica, Ciência dos Materiais, Resistência dos Materiais 1 e 2, Materiais de Construção Civil, Elementos de Máquinas I e II, Processos de Fabricação Mecânica I, e Materiais de Fabricação Mecânica I. Professora da Universidade de Brasília no Campus de Gama lecionando atualmente as disciplina de Desenho Industrial Assistido por Computador e Design e Concepção de Veículos."
  //   },
  //   {
  //     "email": "evgarcia@unb.br",
  //     "nome": "Euler de Vilhena Garcia",
  //     "bio": "Professor Adjunto 2 da Universidade de Brasília, campus Gama. Possui experiência em pesquisas clínicas na área de eletrocardiologia, tendo sido engenheiro e pesquisador do Instituto do Coração do Hospital das Clínicas da Faculdade de Medicina da USP e consultor autônomo para a filial brasileira da GE Healthcare na área de equipamentos de eletrocardiologia. Seus interesses são na área de Engenharia Biomédica e Educação em Engenharia. Atua em equipes multidisciplinares, tendo publicado artigos científicos em periódicos internacionais das áreas de Engenharia Biomédica, Medicina/Cardiologia e Ciências da Saúde, bem como capítulo de livro na área de Eletrocardiologia (repolarização ventricular/micro-alternância de onda T)."
  //   },
  //   {
  //     "email": "evandroleonardo@unb.br",
  //     "nome": "Evandro Leonardo Silva Teixeira",
  //     "bio": "Possui graduação em Eletromecânica pelo Centro Federal de Educação Tecnológica de Goiás (2004), Mestrado em Sistemas Mecatrônicos (2006) e Doutorado em Sistemas Mecatrônicos (2012) pela Universidade de Brasília. Atualmente é professor dos cursos de Engenharia Automotiva e Engenharia Eletrônica da Faculdade Gama - Universidade de Brasília. Tem experiência na área de Engenharia Elétrica, Mecânica e Computação atuando principalmente nos seguintes temas: Automação, Controle e Integração de Sistemas de Manufatura, Eletrônica Veicular, Sistemas Embarcados, Gerenciamento Integrado da Saúde Veicular (IVHM) e Sistema Produto-Serviço Industrial."
  //   },
  //   {
  //     "email": "fabianamendes@unb.br",
  //     "nome": "Fabiana Freitas Mendes",
  //     "bio": "Doutorado Doctor of Philosophy, University of Oulu, Finlândia. Ano de Conclusão: 2021 Título da Tese: Insights from personality and decision-making in software engineering context   Pulicações: ●\tThe relationship between personality and value-based decision-making ●\tThe relationship between personality and decision-making: A systematic literature review ●\tInsights on the relationship between decision-making style and personality in software engineering Mestrado Mestre em Ciência da Computação pela Universidade Federal de Goiás Ano de Conclusão: 2010 Título da Dissertação: Melhoria de Tecnologia de Informação Multi-Modelo   Graduação Bacharel em Ciência da Computação pela Universidade Federal de Goiás Ano de Conclusão: 2007 Título do Trabalho de Final de Curso: Perspectivas Técnicas e Gerenciais nas Estratégias para Melhoria de Processos de Software"
  //   },
  //   {
  //     "email": "fabianosoares@unb.br",
  //     "nome": "Fabiano Araujo Soares",
  //     "bio": "Fabiano Araujo Soares graduou-se em Engenharia de Redes de Comunicações pela Universidade de Brasília em 2004 obteve o título de mestre em Engenharia Elétrica pela mesma universidade em 2007. Em 2013, também pela Universidade de Brasília, concluiu seu doutorado em Engenharia Eletrônica na área de processamento de sinais biomédicos. Como experiência profissional, Fabiano trabalhou na empresa de telecomunicações Brasil Telecom (2005 - 2006) na área comutação e na empresa Mahvla Telecomm (2006 - 2007) na área de TI. Foi pesquisador convidado do Laboratorio di Ingegneria del Sistema Neuromuscolare e della Riabilitazione Motoria LISiN, laboratório associado ao Politécnico de Torino, Torino - Itália (2008). Em fevereiro de 2014 participou de pesquisa em parceria com a University of Texas at El Paso (UTEP), como parte da cooperação entre as duas universidades. Atualmente é professor adjunto do curso de engenharia eletrônica no campus Gama da Universidade de Brasília. Fabiano tem experiência nas áreas de engenharia biomédica, processamento de sinais e imagens e reconhecimento de padrões. Suas áreas de interesse são: processamento de sinais e imagens, instrumentação eletrônica, sistemas inteligentes e eletrônica aeroespacial."
  //   },
  //   {
  //     "email": "fabraz.at@unb.br",
  //     "nome": "Fabricio Braz",
  //     "bio": "Fabricio Braz é professor adjunto do curso de Engenharia de Software da Faculdade do Gama da Universidade de Brasília. De 2004 a 2012 desenvolveu atividades na área de segurança de software, tendo participado de vários projetos que tratam desse tema, quer seja como bolsista da UnB ou como consultor. Em 2009 conquistou o título de Doutor em Engenharia Elétrica, pesquisando Padrões de Projeto para Segurança de Software em parceria com o Security System Engineering Group da Universidade Flórida Atlântica. Desde 2013 tem pesquisado e na área de aprendizagem de máquina voltada para detecção de padrões, com aplicação em detecção de anomalia em tráfego de redes de comunicação de dados e sensoriamento remoto."
  //   },
  //   {
  //     "email": "fcarbajal@unb.br",
  //     "nome": "Felix Martin Carbajal Gamarra",
  //     "bio": " Possui Pós Doutorado pela Virginia Tech. Doutorado em Engenharia Química pela Universidade Estadual de Campinas (2006). Mestrado em Engenharia de Alimentos pela Universidade Estadual de Campinas (2004) e Graduação em Engenharia Química - Universidad Nacional Pedro Ruiz Gallo (2000). Experiência na área de Engenharia Química, Engenharia de Energia, Engenharia e Ciências de Materiais. Com ênfase no Desenvolvimento de Novos Métodos de Extração, Operações-Processos Industriais, Biorrefinarias, Biocombustíveis, Compostos Bioativos, simulação computacional, Materiais e desenvolvimento de novos Produtos e Materiais."
  //   },
  //   {
  //     "email": "fscardua@unb.br",
  //     "nome": "Fernando Paiva Scardua",
  //     "bio": "Fernando Paiva Scardua graduado em Engenharia Florestal pela Universidade de Brasília (1991), com mestrado em Ciências Florestais pela Escola Superior de Agricultura \"Luiz de Queiroz\" - ESALQ/USP - Piracicaba (1994), doutorado em Desenvolvimento Sustentável pela Universidade de Brasília (2003) e Pós-Doutorado pelo Institut de Recherche pour le Développement, França (2006). Atualmente é Professor Adjunto da Faculdade UnB Gama da Universidade de Brasília (UnB). Tem experiência na área ambiental nos seguintes temas: licenciamento ambiental, Políticas Públicas, Descentralização, Gestão Ambiental, Unidades de Conservação, Política Ambiental, Recursos Hídricos, Biodiversidade e Recursos Florestais. (17/02/2007)"
  //   },
  //   {
  //     "email": "fwcruz@unb.br",
  //     "nome": "Fernando William Cruz",
  //     "bio": "Possui graduação em Processamento de Dados pela Universidade de Brasília (1988), mestrado em Ciência da Computação pela Universidade Federal da Paraíba (1992) e doutorado em Ciências da Informação pela Universidade de Brasília (2008). Atualmente é professor da Universidade de Brasília - Campus do Gama. Tem experiência na área de Ciência da Computação, com ênfase em Telecomunicações, atuando principalmente nos seguintes temas: estudo de usuários, web semântica, bibliotecas digitais, computação musical, sistemas distribuídos e redes de computadores."
  //   },
  //   {
  //     "email": "fhsilva@unb.br",
  //     "nome": "Flávio",
  //     "bio": " Flávio concluiu o doutorado em Engenharia Elétrica na Escola de Engenharia de São Carlos (EESC) da Universidade de São Paulo (USP) em 2004. Atualmente é professor adjunto da Universidade de Brasília (UnB) - Faculdade do Gama. Atua na área de Engenharia Elétrica, com ênfase em análise e controle de sistemas não lineares com aplicações em sistemas elétricos de potência."
  //   },
  //   {
  //     "email": "fabioalfaia@unb.br ",
  //     "nome": "Fábio Alfaia da Cunha",
  //     "bio": "Graduado em Engenharia Mecânica pela Universidade Federal do Pará (1998-2002), com mestrado pela mesma instituição (2003-2005) e doutorado em Ciências Mecânicas pela Universidade de Brasília (2006-2010). Ingressou na Universidade de Brasília como professor substituto em 2008 e se tornou professor Adjunto em 2011. Atualmente é Professor Associado na UnB e atua nos cursos de Engenharia Aeroespacial, Automotiva e Energia. Pesquisa e orienta assuntos relacionados a simulação computacional da combustão de sólidos, líquidos e gases. "
  //   },
  //   {
  //     "email": "fabiomacedomendes@unb.br",
  //     "nome": "Fábio Macedo Mendes",
  //     "bio": "Possui mestrado em Física pela Universidade de Brasília(2006) e doutorado em Física pela Universidade de Brasília(2009). Atualmente é Professor Adjunto da Universidade de Brasília. Tem experiência na área de Física, com ênfase em Física Estatística. Atuando principalmente nos seguintes temas:Processos Gaussianos, Inferência Bayesiana, Processos estocásticos, Equação de Langevin."
  //   },
  //   {
  //     "email": "possa@unb.br",
  //     "nome": "Prof. Gabriela Possa",
  //     "bio": "Possui graduação em Física - Bacharelado pela Universidade de Brasília (2006), graduação em Física - Licenciatura pela Universidade de Brasília (2009), mestrado em Física pela Universidade de Brasília (2009) e mestrado em Engenharia Aeroespacial - Georgia Institute of Technology (2012). Atualmente é doutoranda pelo Instituto de Física da Universidade de Brasília e professora assistente na mesma instituição. Tem experiência nas áreas de física e engenharia aeroespacial, com ênfase em propulsão espacial, sistemas de vácuo, instrumentação científica e fotobiorreatores."
  //   },
  //   {
  //     "email": "georgemarsicano@unb.br",
  //     "nome": "George Marsicano Corrêa",
  //     "bio": "Atualmente, é docente do curso de Engenharia de Software na Universidade de Brasília (UnB). Mestre em Gestão do Conhecimento e da Tecnologia da Informação MGCTI (UCB), Especialista em Sistemas Orientados a Objetos (UCB) e Graduado em Processamento de Dados (UCB). Coach certificado pela Escola Internacional de Coach - The Newfield Network, Santiago do Chile, Gerente de Projeto certificado PMP e Scrum Master. Como docente atuou no curso de Pós-Graduação em Engenharia de Software, da Fundação Universa / Universidade Católica de Brasília, e como pesquisador / autor possui artigos publicados no Brasil e no exterior. Experiência, desde 1999, em Engenharia de Software, tendo atuado como: desenvolvedor, analista de requisitos, analista de negócios, analista de processos e gerente de projetos. Experiência, desde 2002, em projetos com utilização de processos baseado em RUP e tecnologia Java. Já participou da implantação de processos baseados em RUP, com apoio do CMMI e/ou MPS-Br. A partir de 2004, atua como Gerente de Projetos, utilizando a metodologia proposta pelo PMI. Nesse período, atuou no Governo Federal: SERPRO, MPOG, MS, MDS, TJDFT, CONAB e MPS; e em empresas privadas: Fóton Informática, Cast Informática, Politec e CTIS."
  //   },
  //   {
  //     "email": "georges@unb.br ",
  //     "nome": "Georges Daniel Amvame Nze",
  //     "bio": "Possui graduação em Engenharia Elétrica pela Universidade de Brasília (1999), mestrado em Engenharia Elétrica pela Universidade de Brasília (2002) e doutorado em Engenharia Elétrica pela Universidade de Brasília (2006). Atualmente é professor adjunto-I da Universidade de Brasília. Tem experiência na área de Engenharia Elétrica, com ênfase em Sistemas de Telecomunicações, atuando principalmente nos seguintes temas: SIG para Dengue, Mini VANT e Inclusão Digital/Social. "
  //   },
  //   {
  //     "email": "gerardo.idrobo@gmail.com",
  //     "nome": "Gerardo Antonio Idrobo Pizo",
  //     "bio": "Possui graduação em Engenharia Física pela Universidade do Cauca (2005) - Colômbia e Mestrado em Sistemas Mecatrônicos pela Universidade de Brasilia (2009) - Brasil. Atualmente é Doutorando em Sistemas Mecatrônicos pela Universidade de Brasília e Professor Assistente da Universidade de Brasília (UnB), Faculdade UnB-Gama (FGA), onde atua no programa de Engenharia Eletrônica. Possui experiência na área de Eletrônica , Elétrica, Robótica, Mecatrônica, Automação, Ciências da Computação e Física. Atuando principalmente nos seguintes temas: Robótica, Desenvolvimento de sistemas reconfiguráveis, Instrumentação Óptica, Instrumentação Eletrônica, Controle Linear e Não Linear, Processamento Digital de Sinais, Imagens e Vídeo, Visão Computacional, Calibração de Câmeras, Digitalização de Superfícies, Varredura Laser, Reconstrução 3D e Banco de Dados."
  //   },
  //   {
  //     "email": "gilmar.beserra@gmail.com",
  //     "nome": "Gilmar Silva Beserra",
  //     "bio": "Possui graduação (2002), mestrado (2004) e doutorado (2010) em Engenharia Elétrica pela Universidade de Brasília. Tem trabalhado na área de Microeletrônica desde 2002, com ênfase em projeto de circuitos integrados digitais utilizando ferramentas Cadence, atuando como bolsista do Programa Nacional de Microeletrônica na área de Sistemas em Chip (SoC). Sua área de interesse no doutorado foi a modelagem de sistemas mistos em alto nível utilizando SystemC TLM (Transaction Level Modeling) e SystemC-AMS. Em seu pós-doutorado e posteriormente, como pesquisador visitante, trabalhou no projeto SYSMODEL no Instituto Real de Tecnologia (KTH), em Estocolmo. As atividades consistiram na implementação em SystemC de um framework com base na metodologia ForSyDe para a modelagem de sistemas heterogêneos utilizando diferentes modelos de computação."
  //   },
  //   {
  //     "email": "giovannix@unb.br",
  //     "nome": "Giovanni Almeida Santos",
  //     "bio": "Professor Assistente da Universidade de Brasília (UnB). Doutorando do Programa de Pós-Graduação em Engenharia Elétrica da UnB. Possui título de Mestre em Informática (2001) e Graduação em Bacharelado em Ciência da Computação (1998) pela Universidade Federal da Paraíba - Campus II - Campina Grande. Áreas de interesse: Arquitetura Orientada a Serviços, Gerenciamento de Processos de Negócio, Robótica Educacional, Software livre."
  //   },
  //   {
  //     "email": "glauceny@unb.br",
  //     "nome": "Glauceny Cirne de Medeiros",
  //     "bio": "Possui graduação em ENGENHARIA CIVIL pela Universidade Federal da Paraíba (1998), mestrado em Estruturas e Construção Civil pela Universidade de Brasília (2001) e doutorado em Estruturas e Construção Civil pela Universidade de Brasília (2005). Atualmente, atua como professora e pesquisadora nos cursos de Engenharia, da Universidade de Brasília no Campus do Gama. Tem experiência na área de Engenharia Civil, com ênfase em Estruturas, atuando principalmente nos seguintes temas: métodos númericos, mecânica dos materiais e mecânica computacional."
  //   },
  //   {
  //     "email": "hgmoura@yahoo.com.br",
  //     "nome": "Henrique Gomes de Moura",
  //     "bio": "Graduação em Engenharia Mecânica pela Universidade Federal de Uberlândia (2002); Mestrado em Engenharia Mecânica pela Universidade Federal de Uberlândia (2005). Doutorado em Engenharia Mecânica pela Universidade Federal de Santa Catarina em 2010. Experiências nas áreas de métodos numéricos e matemáticos aplicados à engenharia mecânica, modelagem e projeto de sistemas vibroacústicos, controle de ruído e vibrações, engenharia de testes e engenharia de softwares."
  //   },
  //   {
  //     "email": "hilmer@unb.br",
  //     "nome": "Hilmer Rodrigues Neri",
  //     "bio": "Possui mestrado em Ciência da Computação pela Universidade Federal de Campina Grande-UFCG (2002). Atua em Engenharia de Software e possui larga experiência profissional na área de processo de desenvolvimento de software e gestão de projetos de software, tendo atuado em empresas nas esferas pública e privada, além de ter sido consultor do Programa das Nações Unidas para Desenvolvimento-PNUD. Foi gestor de projetos de desenvolvimento e manutenção de software e de customização de processo de desenvolvimento de software. Atualmente é professor do curso de Engenharia de Software da Faculdade Gama, da Universidade de Brasília - UNB."
  //   },
  //   {
  //     "email": "jeramos@unb.br",
  //     "nome": "Jesús Ernesto Ramos Ibarra",
  //     "bio": "Possui graduação em Engenharia Física e portanto uma formação sólida em física, matemática e informática. Eu sou capaz de modelar matematicamente e resolver problemas complexos em diversas áreas e adaptar-me rapidamente aos métodos emergentes. Ao mesmo tempo, estou na capacidade de pesquisa e desenvolvimento de novas tecnologias, e também posso identificar potenciais negócios de tecnologia em pesquisa realizada por outros cientistas. Eu fiz a minha pós-graduação em física na Universidade de Brasília, onde eu ganhei conhecimento aprofundizado na área de Física, especialmente em técnicas de caracterização e propriedades de materiais Magnéticos."
  //   },
  //   {
  //     "email": "jhongoulart@yahoo.com.br",
  //     "nome": "Jhon Nero Vaz Goulart",
  //     "bio": "Possui graduação em Engenharia Civil pela Universidade de Passo Fundo (1999), Mestrado e Doutorado em Engenharia Mecânica pela Universidade Federal do Rio Grande do Sul na área de Fenômenos de transporte. Atua de forma numérica e experimental nas áreas envolvendo máquinas de fluxo, mecânica dos fluidos e turbulência. Como principais técnicas experimentais empregadas estão: anemometria de fio quente e transdutores de pressão. Suas principais pesquisas estão relacionadas a escoamento turbulento em canais compostos e feixe de barras, sobre cilindros e experimentação em turbomáquinas. Atualmente é Professor de ensino superior na Universidade de Brasília - Campus Gama, divisão de energia e vem se dedicando ao aprendizado de técnicas numéricas em CFD e BEM. Atualmente é professor credenciado no Programa de Pós-Graduação em Integridade de Materiais da Engenharia - PG-Intgr e é membro integrande do Grupo de Mecânica Experimental e Computacional da Universidade de Brasília - GMEC."
  //   },
  //   {
  //     "email": "jcormane@unb.br",
  //     "nome": "Jorge Andrés Cormane Angarita",
  //     "bio": "Possui graduação e mestrado em Engenharia Elétrica pela Universidad Industrial de Santander (2003) - Colômbia. Doutorado em Engenharia Elétrica (2013) pela Universidade de Brasília. Atualmente é professor assistente da Universidade de Brasília. Tem experiência em Sistemas Elétricos de Potência, com ênfase em aplicações de técnicas de processamento de sinais em sistemas elétricos de potência, qualidade da energia elétrica e fontes renováveis para a geração de energia elétrica."
  //   },
  //   {
  //     "email": "josianeaguiar@gmail.com",
  //     "nome": "Josiane do Socorro Aguiar de Souza",
  //     "bio": "Doutora e mestre em Desenvolvimento Sustentável pela Universidade de Brasília (UnB). Licenciada e bacharel em Geografia pela Universidade Federal do Amapá. Atualmente é professora adjunta da UnB/ FGA e pós-doutoranda com o Projeto de Geração Descentralizada de Energia por meio de fontes alternativas - Tecnologia e Produção de Energia elétrica na Faculdade de Tecnologia da UnB. Tem experiência na área de Geografia, com ênfase em Geografia Urbana, atuando principalmente nos seguintes temas: ordenamento territorial, desenvolvimento sustentável, indicadores, energia e ambiente, gestão ambiental e planejamento"
  //   },
  //   {
  //     "email": "jfelicio@unb.br",
  //     "nome": "José Felício da Silva",
  //     "bio": "Possui graduação em Engenharia Elétrica Opção Eletronica pela Universidade Federal da Paraíba (1977) e doutorado em Genie Biologique - Institut National Polytechnique de Lorraine (1992). Tem experiência na área de Engenharia Biomédica, com ênfase em Instrumentação Odontológica e Médico-Hospitalar, atuando principalmente nos seguintes temas: engenharia clinica, redes neurais artificiais, sistema respiratorio, manutenção e integridade."
  //   },
  //   {
  //     "email": "jpetrocchi@unb.br",
  //     "nome": "Juliana Petrocchi Rodrigues",
  //     "bio": "Possui graduação em Bacharelado em Química pela Universidade de Brasília (2004) e Mestrado em físico-química pela mesma instituição. Doutorado também em química na UnB na área de produção de biocombustíveis derivados de biomassa.Tem experiência na área de Química, com ênfase em Química Orgânica e tecnologia química, atuando principalmente nos seguintes temas: biocombustíveis, biomassa, catalise, craqueamento térmico e catalítico, hidrocraqueamento, análises de combustíveis, cromatografia e educação ambiental. Atualmente, é Professora Adjunta na Universidade de Brasília, na área de Engenharia de Energia e Coordenadora de Extensão da UnB- Faculdade do Gama."
  //   },
  //   {
  //     "email": "aguayo@unb.br",
  //     "nome": "Leonardo Aguayo",
  //     "bio": "Possui graduação em Engenharia Elétrica, Ênfase Telecomunicações pela Universidade de São Paulo (1994), mestrado em Engenharia Elétrica pela Universidade de São Paulo (1999) e Doutorado em Teleinformática pela Universidade Federal do Ceará (2008). Atuou durante 5 anos no Instituto Nokia de Tecnologia em pesquisas de redes sem fio. Trabalhou como pesquisador associado da Universidade de Brasília e como bolsista na Universidade de São Paulo. Tem experiência na área de Engenharia Elétrica, com ênfase em Sistemas de Telecomunicações, atuando principalmente nos seguintes temas: redes neurais artificais, análise de séries temporais, filtros adaptativos e algoritmos RLS rápidos. Atuou como Professor Visitante no Departamento de Engenharia Elétrica na UnB e atualmente é Professor Adjunto na UnB, Campus do Gama."
  //   },
  //   {
  //     "email": "lbomcarvalho@gmail.com",
  //     "nome": "Lindomar Bomfim de Carvalho",
  //     "bio": "É Bacharel e Licenciado em Física pela Universidade de Brasília (1997 e 1998) e Doutor em Física pela Universidade de Houston - Texas, US (2005). Tem experiência na área de Física da Matéria Condensada, com ênfase no estudo de estruturas de Líquidos e Sólidos, propriedades magnéticas dos sólidos; difractometria; espalhamento de nêutrons; XRD e montagem e operação de sistema de crescimento de filmes finos por sputtering; experiência na montagem e uso de forno de centelha voltaica (Tri-arc furnace) - preparação de amostras inter-metálicas. Tem também trabalhado na montagem e operação da plataforma de medidas físicas (Physical Property Measurements System - PPMS), especialmente com as opções Capacidade Térmica (HC), VSM e ACMS."
  //   },
  //   {
  //     "email": "loana@unb.br",
  //     "nome": "Loana Nunes Velasco",
  //     "bio": "Graduada em 2005 pela Universidade Federal de Mato Grosso, no curso de Engenharia Elétrica, mestrado no programa de pós-graduação da Universidade Estadual Paulista Júlio de Mesquita Filho do campus de Ilha Solteira, na área de Qualidade de Energia (2007). Doutorado na Universidade Federal de Uberlândia, na Área de Qualidade de Energia, (2013)."
  //   },
  //   {
  //     "email": "lmbrasil@gmail.com",
  //     "nome": "Lourdes Mattos Brasil",
  //     "bio": "Lourdes Mattos Brasil possui graduação em Engenharia Elétrica pela Universidade Federal de Santa Catarina (1989), Mestrado em Engenharia Elétrica pela Universidade Federal de Santa Catarina (1994) e concluiu o doutorado em Engenharia Elétrica pela Universidade Federal de Santa Catarina em 1999, sendo parte realizado na Facultés Universitaires Notre-Dame de La Paix (FUNDP), Namur Belgium (1998). Realizou estágio Pós-Doutoral no Programa de Pós-Graduação em Engenharia Biomédica da Universidade Federal da Paraíba (2001-2002). Atualmente é Professor Adjunto da Universidade de Brasília (UnB), Faculdade UnB-Gama (FGA), onde atua na Engenharia Eletrônica, bem como é coordenadora do Lato Sensu em Engenharia Clínica e do Stricto Sensu, Mestrado em Engenharia Biomédica. Tem experiência na área de Engenharia Biomédica, com ênfase em Informática em Saúde, atuando principalmente nos seguintes temas: informática em saúde, inteligência artificial em saúde, engenharia biomédica, redes neurais artificiais, sistemas baseados no conhecimento, descoberta de conhecimento, realidade virtual, sistemas tutores inteligentes, sistemas especialistas híbridos e gestão do conhecimento. Suas produções técnicas-científicas permeiam essas áreas, bem como suas publicações de livros, prêmios, palestras/seminários, pareceres, consultorias. Também participa como membro das sociedades brasileira e internacional: SBC, SBEB e IEEE."
  //   },
  //   {
  //     "email": "luciano.unb@gmail.com",
  //     "nome": "Luciano Emidio Neves da Fonseca",
  //     "bio": "Possui doutorado em Engenharia Oceânica pela Universidade de New Hampshire, EUA (2001), mestrado em Engenharia Elétrica pela Universidade Estadual de Campinas (1990) e graduação em Engenharia Elétrica pela Universidade de Brasília (1986). Atualmente é Professor Adjunto da Faculdade de Engenharia do Gama da Universidade de Brasília. Foi Professor Associado da University of New Hampshire, Departamento de Engenharia Oceânica; e Especialista do Programa de Geofísica Marinha da Comissão Oceanográfica Intergovernamental da Nações Unidas. Tem experiência na área de Engenharia Oceânica e Processamento digital de Sinais, com ênfase em Acústica Submarina, atuando principalmente nos seguintes temas: Geofísica marinha, Sensoriamento Remoto, GIS marinho e Visualização Científica de dados oceanográficos, ciências oceânicas e geoengenharia. Atualmente é Coordenador Geral de Graduação do Campus UnB-Gama, onde são ministrados cursos de Engenharia Aeroespacial, Engenharia Automotiva, Engenharia de Energia, Engenharia Eletrônica e Engenharia de software."
  //   },
  //   {
  //     "email": "lucianonoleto@unb.br",
  //     "nome": "Luciano Gonçalves Noleto",
  //     "bio": "Luciano Gonçalves Noleto é Engenheiro Mecânico (2004), mestre em Ciências Mecânicas (2006) e Doutor em Ciências Mecânicas (2010) pela Universidade de Brasília. No presente momento é professor adjunto da Universidade de Brasília, lotado na Faculdade UnB Gama e atuando no curso de Engenharia de Energia. Durante os anos de 2006 a 2008 exerceu o cargo de professor substituto no departamento de Engenharia Mecânica da UnB, lecionando nas áreas de Termodinâmica, Mecânica dos Fluidos, Transferência de Calor e Métodos Numéricos. Os temas recorrentes nos trabalhos publicados são: Escoamentos Turbulentos, Escoamentos Ambientais, Turbinas Hidráulicas, Métodos Numéricos e Método dos Elementos Finitos."
  //   },
  //   {
  //     "email": "souesil@unb.br",
  //     "nome": "Maria de Fátima Souza e Silva",
  //     "bio": "Possui graduação em Engenharia Civil pela Universidade Federal de Santa Maria (1987), graduação em Matemática e Física Licenciatura Plena pela Faculdade Imaculada Conceição (1982), mestrado em Engenharia Civil pela Universidade Federal do Rio Grande do Sul (1995) e doutorado em Engenharia de Produção pela Universidade Federal de Santa Catarina (2005). Atualmente é professor adjunto 4 da Faculdade UnB Gama, responsável pelas disciplinas de Gestão da Produção e Qualidade. Compõe o quadro de professores do Programa de Pós-graduação em Desenvolvimento, Sociedade e Cooperação Internacional onde ministrou as disciplinas de Políticas Públicas (enfase em avaliação), Metodologia Científica e Teorias do Desenvolvimento. Orientou uma dissertação de mestrado no Programa de Pós-graduação em Estruturas e Construção Civil, uma no Programa de Pós-graduação em Arquitetura e Urbanismo e uma no Programa de Pós-graduação em Ciência da Informação. Atualmente, orienta no PPGDSCI uma dissertação de mestrado. Tem experiência na área de Gestão da Produção, atuando nos seguintes campos: Educação em Engenharia; Habitação de Interesse Social; Gestão da Produção com ênfase em edificações e automotiva; Processo de Projetos Tecnológicos, incluindo sistemas e processos de monitoramento de políticas públicas, desenvolvimento de projetos de fábricas baseados na gestão de processos e desenvolvimento de protótipos de projetos inovadores como carros elétricos e sistemas alternativos para a produção de energia. Possui 33 artigos publicados em anais de eventos, dois artigos publicados em periódicos científicos, um livro publicado em co-autoria e dois capítulos de livros em co-autoria."
  //   },
  //   {
  //     "email": "mariliamfg@gmail.com",
  //     "nome": "Marília Miranda Forte Gomes",
  //     "bio": "Bacharel em Estatística pela Universidade de Brasília (2005). Mestre (2008) e Doutora (2011) em Demografia pelo programa de Pós-Graduação do Centro de Desenvolvimento e Planejamento Regional Cedeplar/FACE/UFMG. Atualmente é Professora Adjunta da Faculdade do Gama (FGA) da Universidade de Brasília (UnB). Áreas de interesse: Probabilidade e Estatística, Estatística Aplicada, Métodos Quantitativos Aplicados às Engenharias, Ciências Contábeis e Atuariais/Administração/Ciências Sociais/Relações Internacionais/Saúde/Ciências biológicas, População e saúde, Técnicas de Análise Demográfica, Envelhecimento, Mortalidade e Previdência."
  //   },
  //   {
  //     "email": "mateusmiranda@unb.br",
  //     "nome": "Mateus Rodrigues Miranda",
  //     "bio": "Pós-Doutorado em Design de Transporte e Ergonomia do Produto pela Universidade de Quebec em Montreal - UQÀM (2015). - Doutorado em Ciências Mecânicas pela Universidade de Brasília (2014). - Mestrado em Engenharia Aeronáutica e Mecânica pelo Instituto Tecnológico de Aeronáutica / ITA (2004). - Graduação em Engenharia Mecânica pela Universidade de Brasília (2000) Professor Adjunto da Universidade de Brasília - UnB (Campus Gama) nos Cursos de Engenharia Automotiva e de Engenharia Aeroespacial, ministrando disciplinas e desenvolvendo pesquisas nas áreas de Design Automotivo, Ergonomia do Produto e Sistemas Aeroespaciais. Experiência profissional nas áreas de Engenharia Mecânica, Engenharia Aeronáutica, Design de Produto e Ergonomia, incluindo trabalhos desenvolvidos na EMBRAER (2004-2009), onde atuou como engenheiro de desenvolvimento do produto. Também atuou profissionalmente nas áreas automação e inspeção veicular. Membro do Laboratório de Arte e Tecnociência - LART, desenvolvendo pesquisas nas áreas de Projeto de Produto, Design, Ergonomia, Simulação e Realidade Virtual."
  //   },
  //   {
  //     "email": "maura@unb.br",
  //     "nome": "Maura Angelica Milfont Shzu",
  //     "bio": "Professora da Universidade de Brasília, campus Gama. Possui doutorado em Estruturas e Construção Civil pela Universidade de Brasília (2006), mestrado em Engenharia Civil, área de concentração: Estruturas e Construção Civil, pela Universidade Federal de Pernambuco (2001), e graduação em Engenharia Civil pela Universidade de Pernambuco (1997). Atuou durante dois anos como engenheira calculista de estruturas e fundações. Lecionou na graduação e pós-graduação do curso de engenharia civil da UnB na condição de monitora e estagiária. Lecionou na graduação dos cursos de engenharia civil e elétrica da UnB, na condição de professora substituta. Tem experiência acadêmica na área de Engenharia Civil, com ênfase em Mecânica dos Sólidos e Mecânica da fratura, atuando principalmente na área de otimização e propagação de fissuras."
  //   },
  //   {
  //     "email": "serr.mau@gmail.com",
  //     "nome": "Maurício Serrano",
  //     "bio": "Possui graduação em Engenharia da Computação pela Universidade Federal de São Carlos (2001) e mestrado em Ciência da Computação pela Universidade Federal de São Carlos (2003). Foi docente da Universidade de Franca e professor contratado pelo Departamento de Ciência da Computação do ICMC/USP - São Carlos, ministrando disciplinas da área da computação. Defendeu a tese de doutorado em 23 de Agosto de 2011 na Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio), orientado pelo Professor Dr. Julio Cesar Sampaio do Prado Leite. Atualmente, é professor adjunto na Universidade de Brasília, campus do Gama (UnB/FGa), no curso de Engenharia de Software. Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software, atuando principalmente nos seguintes temas: arquitetura de software, engenharia de requisitos, rastreabilidade, sistemas multi-agentes (mas), paradigma intencional e robótica educacional."
  //   },
  //   {
  //     "email": "mileneserrano@unb.br",
  //     "nome": "Milene Serrano",
  //     "bio": "Sou graduada em Engenharia de Computação pela Universidade Federal de São Carlos (UFSCar) e pós-graduada (mestrado) em Ciência da Computação pela mesma instituição de ensino, sob a orientação da Professora Dra. Rosângela Aparecida Dellosso Penteado. Durante a realização do mestrado, fui bolsista CAPES por mérito e classificação segundo os critérios do Departamento de Computação da UFSCar. Fiz estágio supervisionado para docente da UFSCar, ministrando aulas para alunos de graduação na disciplina de \"Paradigmas de Linguagem de Programação\". Participei de um projeto de pesquisa \"Projeto Apyon Studio - Fase II : Modelo Gráfico de Dependência entre as Regras de Negócio e o Impacto Físico Financeiro sobre a Manutenção\". Ao longo desse projeto, fui bolsista FAPESP TTI nível 4. Atuei como pesquisadora e desenvolvedora, integrante do projeto no módulo de Regras de Negócio e colaboradora nos demais módulos do projeto. Conclui meu doutorado em Ciência - Informática na Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio) na área de Engenharia de Software sob a orientação do Professor Ph.D Carlos José Pereira de Lucena. Além disso, realizei parte do meu doutorado na Universidade de Toronto, no Canadá, sob a orientação do Professor Ph.D John Mylopoulos, e apoiada financeiramente pelo CNPQ com uma bolsa SWE. Atuo como colaboradora (pesquisadora e desenvolvedora) no Grupo de Pesquisa do Laboratório de Engenharia de Software (LES - PUC-Rio). Esse grupo desenvolve vários projetos e conta com o apoio financeiro de agências de fomento (ex. FINEP, CNPq e CAPES) bem como de empresas privadas (ex. IBM e Globo.com). Atualmente, sou professora, Adjunta, com regime de dedicação exclusiva, na Universidade de Brasília (UnB-FGA), no curso de Engenharia de Software. Meus interesses concentram-se nas áreas de Engenharia de Software, Engenharia de Requisitos, Arquitetura de Software, Engenharia Reversa/Reengenharia. Dentre os tópicos de interesse, têm-se: (i) diferentes Paradigmas, com destaque para Sistemas Multiagentes, Orientação a Objetos, Orientação a Comportamento e Orientação à Meta; (ii) Transparência de Software; (iii) Computação Ubíqua, Pervasiva e Móvel; (iv) Engenharia de Domínio & Engenharia de Aplicação; e (v) Robótica Educacional."
  //   },
  //   {
  //     "email": "marcioavelar@unb.br",
  //     "nome": "Márcio Henrique de Avelar Gomes",
  //     "bio": "Possui doutorado em Engenharia Mecânica pela Universidade Federal de Santa Catarina (2002) (em convênio com o \"Institut für Technische Akustik - Rheinisch-Westfalischen Technischen Hochschule/Aachen\"), mestrado em Engenharia Mecânica pela Universidade Federal de Santa Catarina (1998) e especialização em Jornalismo Científico pela Universidade Estadual de Campinas (2004). Atualmente é Professor Adunto da Universidade de Brasília (UnB - Gama). Tem experiência em áreas da Engenharia Mecânica e Engenharia Civil, especificamente em Vibrações e Acústica, atuando principalmente nos seguintes temas: acústica, acústica arquitetônica, difusores acústicos, simulações acústicas, medições acústicas, psicoacústica, controle de ruído industrial, ensaios não destrutivos para indústria aeroespacial, análise modal e projetos mecânicos relacionados à dinâmica estrutural."
  //   },
  //   {
  //     "email": "marioand@unb.br",
  //     "nome": "Mário Andrade",
  //     "bio": "Possui graduação e mestrado em Engenharia de Produção pela Escola de Engenharia de São Carlos (USP). Possui experiência profissional nas áreas de manufatura enxuta e gestão da cadeia de suprimentos, bem como em modelagem e redesenho de processos. Atuou em empresas privadas de diferentes segmentos e em empresas públicas, em projetos de transformação organizacional. Principais temas de interesse são: metodologias e ferramentas de análise e transformação organizacional, manufatura enxuta, gestão da cadeia de suprimentos, aprendizagem baseada em problemas/projetos."
  //   },
  //   {
  //     "email": "olexiy@aerospace.unb.br",
  //     "nome": "Olexiy Shynkarenko",
  //     "bio": "1997 - 2000 Bsc - Faculdade de Física e Tecnologia, Departamento de Motores de Foguete, Universidade Nacional de Dnipropetrovsk, Ucrânia. 2000 - 2002 Especialização - Faculdade de Física e Tecnologia, Departamento de de Motores de Foguete, Universidade Nacional de Dnipropetrovsk, Ucrânia. 2006 - PhD em Engenharia Aeroespacial, area - \"Motores de foguetes e sistemas de fornecimento de energia para foguetes\" - Universidade Nacional de Dnipropetrovsk, Ucrânia. 2008 - Post-Doutorado - Middle East Technical University, Department of Aerospace Engineering, Ankara, Turkey. 2006 - 2013 - Professor - Universidade Nacional de Dnipropetrovsk, Departamento de Motores de Foguete, Ucrânia. 2013 - Atual - Professor - Engenharia Aeroespacial, Faculdade Gama, Universidade de Brasilia, Brasil. 2015 - 2017 - Coordenador - Engenharia Aeroespacial. 2018 - Atual - Lider do Grupo de Pesquisa CNPq \"Laboratório de Propulsão Química\""
  //   },
  //   {
  //     "email": "paologessini@unb.br",
  //     "nome": "Paolo Gessini",
  //     "bio": " Possui graduação em (BSc+MSc in) Ingegneria Aeronautica - Università degli Studi di Roma La Sapienza (1994), mestrado em (MSc in) Aeronautical & Astronautical Engineering - Ohio State University (1999) e doutorado em (PhD in) Aerospace Engineering - University of Southampton (2006). Atualmente é professor adjunto da Universidade de Brasília. Tem experiência na área de Engenharia Aeroespacial, com ênfase em Propulsão Aeroespacial, e na área de Física de Plasmas, atuando principalmente na Propulsão Elétrica Espacial e áreas afins, como Tochas de Plasma, mas também na Propulsão Química, em particular Foguetes Híbridos"
  //   },
  //   {
  //     "email": "patriciabraga@unb.br",
  //     "nome": "Patrícia Regina Sobral Braga",
  //     "bio": "Formada pela Universidade de Brasília, tanto no curso de Bacharelado em Química (2002) como em Licenciatura em Química (2006). Possui o título de mestre na área de Química Inorgânica também pela Universidade de Brasília (2005). Seu mestrado se baseou na Química com ênfase em Foto-Química Inorgânica, atuando principalmente nos seguintes temas: processos oxidativos avançados com os corantes Preto de Eriocromo T, Vermelho Congo e Azur II. Aplicou seus estudos nas análises por UV para processos Fenton, foto-Fenton e catalálise heterogênea. É doutora pela UnB (2011) com ênfase em Catálise se dedicando ao estudo de catalisadores mesoporosos aplicados em reações industriais: reação de ciclização intramolecular do (+)-citronelal e esterificação do ácido oléico com etanol."
  //   },
  //   {
  //     "email": "pedro.lavinas@gmail.com",
  //     "nome": "Pedro Nery Lavinas",
  //     "bio": "Professor de Matemática Aplicada da Universidade de Brasília - Campus Gama (FGA/UnB) desde Fev/2013. Doutor em Engenharia Mecânica pela Escola Politécnica da Universidade de São Paulo (2010). Possui graduação em Engenharia Mecânica pela Universidade Estadual de Campinas (2003). Tem experiência na área de Mecânica dos Fluidos, Interação Fluido-Estrutura, Estabilidade Hidrodinâmica, Equações Diferenciais e Análise Numérica."
  //   },
  //   {
  //     "email": "rafael@fis.unb.br",
  //     "nome": "Rafael Morgado Silva",
  //     "bio": "Possui graduação em Física pela Universidade Estadual de Campinas (1998), mestrado em Física pela Universidade de Brasília (2001) e doutorado em Física pela Universidade de Brasília (2004). Realizou estágio pós doutoral no departamento de Matemática da Universidade de Brasília, e atualmente é professor adjunto, na área de sistemas eletrônicos, com atuação no novo Campus do Gama da Universidade de Brasília. Tem experiência em computação e programação paralela, com ênfase no desenvolvimento de arquiteturas para computação de alta performance em cluster e no desenvolvimento de aplicações científicas massivamente paralelas. Desenvolveu diversos algoritmos paralelos, dentre os quais algoritmos tipo Monte Carlo para simulação de processos estocásticos e implementações do algorítimo genético. Também tem experiência na área de Física Estatística e Processos Estocásticos, tendo publicado dez artigos científicos em periódicos internacionais qualis A. Atualmente desenvolve pesquisas em computação de alta performance, buscando sistemas de hardware com melhor relação custo/benefício, além de desenvolver bibliotecas para programação científica e simulações de sistemas físicos."
  //   },
  //   {
  //     "email": "RejaneCosta@unb.br",
  //     "nome": "Rejane Maria da Costa Figueiredo",
  //     "bio": "Doutora em Engenharia Mecânica pela Escola de Engenharia de São Carlos - EESC/USP (2002), área de terceirização de serviços de tecnologia da informação. Mestre em Ciências da Computação e Matemática Computacional pela Universidade de São Paulo ICMC/USP (1997), área de engenharia de software - engenharia reversa de software. Graduada em Análise de Sistemas pela Universidade de Ribeirão Preto (1990). Professora do curso de Engenharia de Software da Faculdade FGA Gama, da Universidade de Brasília - UNB. Desenvolve atividades acadêmicas como professora e pesquisadora nas áreas de Qualidade de Software e Aquisição de Software, e Governança em Tecnologia da Informação: Contratação de Serviços de TI. Coordenadora do Grupo de Pesquisa CNPq UnB Governança em TI. Implementadora do Modelo Brasileiro de Processos de Sofware (MPS.BR). Membro, como especialista, do Núcleo de Governança em Tecnologia da Informação (NGovTI) da Comissão de Coordenação do SISP SLTI/MPOG. Interesse nas áreas de: Engenharia de Software - Qualidade de Software; Governança em Tecnologia da Informação - Contratação de Serviços de TI, Outsourcing/Terceirização, e Qualidade de Serviços."
  //   },
  //   {
  //     "email": "renan@unb.br",
  //     "nome": "Renan Utida Barbosa Ferreira",
  //     "bio": "Possui graduação (2006) e mestrado (2009) em Engenharia Elétrica e doutorado (2015) em Engenharia de Sistemas Eletrônicos e de Automação pela Universidade de Brasília. Atualmente é Professor Adjunto do curso de Engenharia Eletrônica da Universidade de Brasília. Tem experiência na área de Engenharia Elétrica, com ênfase em Processamento de Sinais, atuando principalmente nos seguintes temas: processamento e compressão de imagens e vídeos."
  //   },
  //   {
  //     "email": "renatocoral@unb.br",
  //     "nome": "Renato Coral Sampaio",
  //     "bio": "Renato Coral Sampaio, possui graduação em Engenharia Mecatrônica pela Universidade de Brasília (2004), mestrado em Ciência da Computação pela Universidade de Brasília (2013) atualmente está cursando o doutorado em Sistemas Mecatrônicos na UnB. É professor de Eng. de Software na Faculdade do Gama (UnB) desde 2015. Tem experiência na área de Sistemas em Arquiteturas Reconfiguráveis (FPGA), design de Sistemas em Chip (SoCs), Sistemas Embarcados em Tempo Real, Robótica, Controle Preditivo e Algoritmos de otimização Bio-inspirados."
  //   },
  //   {
  //     "email": "rvlopes@unb.br",
  //     "nome": "Renato Vilela Lopes",
  //     "bio": "Possui graduação em Engenharia Elétrica pela Universidade Estadual Paulista Júlio de Mesquita Filho - UNESP (2004), mestrado em Engenharia Eletrônica e Computação pelo Instituto Tecnológico de Aeronáutica - ITA (2007) na área de Controle de Sistemas Dinâmicos e doutorado em Engenharia Eletrônica pela Universidade de Brasília - UNB (2014) na área de Identificação de Sistemas Dinâmicos Híbridos. Em 2011 foi aprovado em concurso público para professor na Universidade de Brasília (UnB) campus Faculdade do Gama (FGA), onde atua desde então. Tem experiência na área de Controle e Modelagem de Sistemas, atuando principalmente nos seguintes temas: controle preditivo, filtragem de sistemas dinâmicos, identificação e modelagem de sistemas. Durante os anos de 2006 e 2009 trabalhou na empresa Tecumseh do Brasil na cidade de São Carlos-SP, indústria do segmento de compressores herméticos para refrigeração, onde atuou como Analista e Pesquisador no projeto e desenvolvimento de motores elétricos de indução monofásico, tendo realizado vários trabalhos de Modelagem, Identificação, Simulação e Programação."
  //   },
  //   {
  //     "email": "rikosdf@gmail.com",
  //     "nome": "Ricardo Ajax Dias Kosloski",
  //     "bio": "Graduação em Engenharia Elétrica pela Universidade de Brasília (1981) e especialização em Análise de Sistemas pela ETUC Católica/DF (1985). Pós graduação em Engenharia de Software, pela Universidade Católica de Brasília - UcB (2003) e Mestrado em Gestão do Conhecimento e da Tecnologia da Informação, também pela UcB (2005). A atuacao inclui experiencia na área de engenharia elétrica de 1981 a 1993, em estudos relacionados ao projetos de equipamentos da transmissão. Como Analista de sistemas desde 1993 ate hoje, atuando desde as áreas clássicas de desenvolvimento de software (sistemas de informação; tecnologia da informação e banco de dados), até, hoje em dia, atuações focadas no estudo e aplicação de métricas e estimativas em projetos de desenvolvimento de software; produtividade e qualidade de software e uso de modelos de maturidade na industria de software tais como: CMMI e MPS.Br, além da ISO 9000:2000, ISO 14504, ISO 12207 e ISO 9126."
  //   },
  //   {
  //     "email": "ricardoc@unb.br",
  //     "nome": "Ricardo Matos Chaim",
  //     "bio": "Possui graduação em Administração e Informática, mestrado e Doutorado em Ciência da Informação pela UnB. Atualmente é professor Adjunto da Universidade de Brasília, para o curso de Engenharia de Software. Tem experiência na área de gestão governamental e Engenharia de Sistemas, atuando nos seguintes temas: marketing estratégico para a Internet, gerenciamento de riscos e incertezas, Engenharia de Software. Atua como pesquisador no IBTI/UnB e atuou como pesquisador no CEFTRU/UnB (Centro Interdisciplinar de Estudos em Transporte) e na coordenação de seu laboratório de sistemas. Trabalhou na Embrapa por dois anos atuando em projetos de cooperação internacional como consultor do Banco Interamericano de Desenvolvimento (Projeto PROCENSUL II). Atuou na Empresa de Tecnologia e Informações da Previdência Social - DATAPREV onde exerceu as funções técnicas de analista de sistemas, de gerente de projetos para a Internet e de gestor de terceirizações de projetos de sistemas e qualidade de software baseado na técnica de pontos por função. Entre as funções administrativas atuou como gerente de serviços para a Procuradoria Geral do INSS e para a Auditoria Geral do INSS. Cedido à Presidência da República, atuou por dois anos na Assessoria Técnica da Ministra da Controladoria-Geral da União/Presidência da República (CGU) e na Assessoria do Ouvidor-Geral da República. Atuou junto à Assessoria da Diretoria de Negócios da DATAPREV em Brasília, relacionando-se com órgãos como a Advocacia Geral da União, Ministério da Previdência Social e Instituto Nacional do Seguro Social - INSS. Foi gerente estadual da DATAPREV para o DF período em que auxiliou na estruturação da Secretaria Executiva da DATAPREV no âmbito de sua Presidência, sendo o primeiro Secretário Executivo do órgão. Sua experiência em docência se iniciou em 2000 tendo atuado como professor e coordenador de turmas de graduação e pós-graduação em Tecnologia da Informação. Já lecionou em cursos de pós-graduação junto a instituições como ENAP e UPIS em disciplinas relacionadas ao Marketing Estratégico e Gestão da Informação, inclusive em disciplinas de ensino à distância, bem como junto ao FGV Management da Fundação Getúlio Vargas em Brasília nos cursos de MBA em Administração Estratégica de Sistemas de Informação, ministrando a disciplina gestão de demandas; no MBA em Previdência e Gestão de Fundos de Pensão, ministrando a disciplina gerenciamento de riscos; e, coordenando o curso de MBA Auditoria Interna com ênfase em Auditoria de Desempenho e Avaliação de Programas para a Funasa e Tribunal de Contas do DF."
  //   },
  //   {
  //     "email": "jacobi@unb.br",
  //     "nome": "Ricardo Pezzuol Jacobi",
  //     "bio": "RICARDO PEZZUOL JACOBI concluiu o doutorado em Ciências Aplicadas - Université Catholique de Louvain em 1993. Foi professor do Instituto de Informática da UFRGS no período de 1989 a 1998. Atualmente é professor associado da Universidade de Brasilia. Foi Diretor do Instituto de Ciências Exatas da UnB no período de 2004 a 2007. Em agosto de 2008 assumiu a Vice-Direção do Campus UnB Gama, onde foram criados quatro novos cursos de engenharia. Atua na área de Ciência da Computação e Microeletrônica, com ênfase em CAD, arquiteturas reconfiguráveis e sistemas monoliticos (SoC)."
  //   },
  //   {
  //     "email": "fragelli@hotmail.com",
  //     "nome": "Ricardo Ramos Fragelli",
  //     "bio": "Possui graduação em Engenharia Mecânica (2000), Mestrado em Engenharia Mecânica (2003) e Doutorado em Ciências Mecânicas, todos pela Universidade de Brasília (2010). Atualmente é professor Adjunto da Universidade de Brasília, onde recebeu vários prêmios nacionais no uso de TICs na educação superior e inovações no Ensino de Engenharia. É líder do Grupo de Pesquisas em Sistemas Inteligentes e Adaptativos (GPSIA) da Faculdade UnB Gama (FGA) onde desenvolve pesquisas em Sistemas Tutores Inteligentes e Adaptativos aplicados à Educação e assuntos correlatos tais como Mecânica Computacional, Simuladores Interativos, Redes Quantizadas, Educação em Engenharia, Educação a Distância e Objetos de Aprendizagem Multiformes."
  //   },
  //   {
  //     "email": "ritasilva@unb.br",
  //     "nome": "Rita de Cássia Silva",
  //     "bio": "Possui graduação em Engenharia Civil pela Universidade de Brasília (1995), mestrado em Estruturas e Construção Civil pela Universidade de Brasília (1999) e doutorado em Engenharia Mecânica Confiabilidade Estrutural - École Nationale des Ponts et Chaussées (2004). Possui experiência nas áreas de Mecânica dos Sólidos e Confiabilidade Estrutural. Atualmente, é professora adjunto da Universidade de Brasília - Faculdade UnB Gama na área de Engenharia Automotiva. Tem se dedicado a uma nova linha de pesquisa relacionada à área de Modelagem Multicorpos (MBS) com ênfase em suspensões veiculares. É uma das coordenadoras do Grupo de Modelagem e Simulação de Sistemas Automotivos (GMSSA)."
  //   },
  //   {
  //     "email": "rmiracer@unb.br       ",
  //     "nome": "Rodrigo Andres Miranda Cerda",
  //     "bio": "Possui graduação em Engenharia em Computação e Informática pela Universidad de Magallanes (2001), mestrado em Geofísica Espacial pelo Instituto Nacional de Pesquisas Espaciais (2005) e doutorado em Geofísica Espacial pelo Instituto Nacional de Pesquisas Espaciais (2010). Atualmente é professor Adjunto da Universidade de Brasília no campus do Gama (UnB-Gama). Tem experiência na área de Geociências, com ênfase em Ambiente Solar-Terrestre, atuando principalmente nos seguintes temas: turbulência intermitente, caos espaçotemporal, dinâmica não-linear e sincronização. "
  //   },
  //   {
  //     "email": "ronniamorim@gmail.com",
  //     "nome": "Ronni Geraldo Gomes de Amorim",
  //     "bio": "Possui graduação em Física pela Universidade de Brasília(2003), graduação em Matemática pela Universidade Católica de Brasília(1999), mestrado em Física pela Universidade de Brasília(2006), doutorado em Física pela Universidade de Brasília(2009) e pós-doutorado pela International Centre of Condensed Matter Physics of University of Brasilia(2012). Atualmente é Professor Adjunto da Universidade de Brasília. Tem experiência na área de Física, com ênfase em Física -Matemática. Atuando principalmente nos seguintes temas:função de Wigner, grupos de Lie, produto de Weyl, operador-estrela."
  //   },
  //   {
  //     "email": "roseanyvieira@yahoo.com.br",
  //     "nome": "Roseany de Vasconcelos Vieira Lopes",
  //     "bio": "Possui graduação em Engenharia Química pela Universidade Federal da Paraíba(2002), mestrado em Engenharia Química pela Universidade Federal de Campina Grande(2005), doutorado em Química pela Universidade de Brasília(2009) e pós-doutorado pela Universidade de Brasília(2010). Atualmente é Professor Adjunto I da Universidade de Brasília e Revisor de periódico da Journal of the American Oil Chemists' Society (Online). Tem experiência na área de Engenharia Química, com ênfase em Processos Industriais de Engenharia Química. Atuando principalmente nos seguintes temas:Análise Térmica, Caracterização de Óleos Vegetais, Polióis obtidos a partir de recursos renováveis, Poliuretanas."
  //   },
  //   {
  //     "email": "rudi@unb.br",
  //     "nome": "Rudi Henri van Els",
  //     "bio": "Formado em Engenharia Elétrica pela Universidade Federal do Maranhão (1990), mestrado em Engenharia Elétrica pela Universidade de Brasília na área de controle e computação (1994) e Doutorado pelo Centro de Desenvolvimento Sustentável da Universidade de Brasília (2008). Professor associado da Universidade de Brasilia do curso de engenharia de energia no campus Gama. Tem experiência na área de Engenharia Elétrica, com ênfase em Controle de Processos e Automação. Desenvolve pesquisas nas áreas de energia renovável, eletrificação rural, veículos elétricos e desenvolvimento sustentável."
  //   },
  //   {
  //     "email": "sbkhalil@unb.br",
  //     "nome": "Saleh Barbosa Khalil",
  //     "bio": "Possui graduação em Engenharia Mecânica Ênfase Automobilística pelo Centro Universitário da FEI (1990) e mestrado em Engenharia Mecânica pela Universidade de Brasília (2001); atuando principalmente nos seguintes temas: Aerodinâmica de um corpo rombudo, Túnel de vento, Teste de protótipos, Desenvolvimento de projetos na área de automobilística, Sistemas de freio a ar modificados, Combustível alternativo e Motores de combustão interna."
  //   },
  //   {
  //     "email": "smflima@yahoo.com.br",
  //     "nome": "Sandra Maria Faleiros Lima",
  //     "bio": "Possui graduação em ciências sociais - Sociologia e antropologia - bacharelado pela Universidade Estadual de Campinas (1986), licenciatura pela Universidade Estadual de Campinas (1987), mestrado em Educação pela Universidade Estadual de Campinas (1996) e doutorado em Educação pela Universidade Estadual de Campinas (2002). Atualmente é professora adjunta IV da Universidade Federal de Tocantins - UFT e pesquisadora associada na Universidade de Brasília - UnB. Tem experiência nas áreas de Sociologia, antropologia, Patrimônio, Cultura e meio ambiente, suas linhas de pesquisa são: Patrimônio, Cultura e Meio Ambinte; Políticas Públicas, cultura e sustentabilidade; Território, Meio Ambiente e Sociedade; Educação, Cultura e Meio Ambiente; Participação, Movimentos Sociais e Novas Formas de Associativismo;diálogos de saberes interétnicos e de seu saber fazer em relação ao conhecimento científico; Interdisciplinaridade e Inovação."
  //   },
  //   {
  //     "email": "luz_msandra@hotmail.com",
  //     "nome": "Sandra Maria da Luz",
  //     "bio": "Possui graduação em Engenharia Industrial Química pela Faculdade de Engenharia Química de Lorena (2001), mestrado em Biotecnologia Industrial pela Faculdade de Engenharia Química de Lorena (2004) e Doutorado em Biotecnologia Industrial pela Escola de Engenharia de Lorena/USP. Desenvolveu atividades de pesquisa no Instituto Superior Tecnico de Lisboa em Portugal em 2006 (Doutorado Sanduíche) e entre 2008-2009 (Pós-doutorado em Ecodesign). Tem experiência na área de Engenharia Química, com ênfase em Tecnologia Química, Biotecnologia Industrial e Materiais, atuando principalmente nos seguintes temas: fibras naturais, celulose, compósitos, processamento de compósitos, morfologia, modificação química, avaliação de ciclo de vida e ecodesign. Atualmente é professora na Universidade de Brasília, atuando no curso de Engenharia de Energia e na coordenação do Programa de pós-graduação em Integridade de Materiais da Engenharia"
  //   },
  //   {
  //     "email": "sandrohaddad@gmail.com",
  //     "nome": "Sandro Augusto Pavlik Haddad",
  //     "bio": "Sandro A. P. Haddad nasceu em Anapolis-Goias, Brasil, em 8 de Fevereiro de 1977. Recebeu o titulo de Engenheiro Eletricista pela Universidade de Brasilia (UnB) em 2000. Foi premiado como o melhor aluno da turma 1/2000. Em 2001, iniciou seu doutorado pela Universidade de Tecnologia de Delft (Delft University of Technology - TUDelft, Electronics Research laboratory), Holanda. Seu projecto de pesquisa era parte de uma Plataforma de Processamento de Sinais Biomedicos para Baixa Potencia Tempo Real de Deteccao de Sinais Cardiacos (BioSens - Biomedical Signal Processing Platform for Low-Power Real-Time Sensing of Cardiac Signals). Sua pesquisa incluia, desenvolvimento de circuitos analogicos de baixa tensao e baixissima potencia e sistemas biomedicos e circuitos analogicos de alta frequencia para sistemas de comunicacao UWB. Ele recebeu o titulo de Ph.D. em microeletronica em dezembro de 2006 com a tese, Ultra Low-Power Biomedical Signal Processing An Analog Wavelet Filter Approach for Pacemakers . De 2007 a 2010, trabalhou na Freescale Semicondutores como engenheiro projetista de circuitos integrados (Analog IC Designer). Durante esse período, ele trabalhou no grupo de desenvolvimento de circuitos em gerenciamento de energia (power management) e no grupo de IP´s analógicos. Além disso, contribuindo na divisão de pesquisa e inovação da Freescale, possui duas patentes registradas no escritório de patentes dos Estados Unidos (USPTO United States Patente and Trademark Office). Em 2010, iniciou suas atividades na Universidade de Brasília (UnB) como Professor Adjunto. Atualmente é professor da Engenharia Eletrônica da Faculdade do Gama (FGA/UnB) e ministra disciplinas na área de microeletrônica e de Projeto de Circuitos Integrados. Também participa do programa de mestrado em Engenharia Biomédica da Faculdade UnB Gama (FGA) e do Programa de Pós-Graduação Sistemas Eletrônicos e Automação (PGEA/ENE) do departamento de Engenharia Elétrica da Universidade de Brasília, onde orienta alunos de mestrado e doutorado na sua linha de pesquisa que inclui: circuitos integrados analógicos e mistos (mixed-signal), processamento analógico de sinais de baixa tensão e baixíssima potência (ultra low-power) para sistemas biomédicos implantados e circuitos analógicos de alta frequência para sistemas de comunicação UWB. Adicionalmente, participa como gerente técnico do centro de Design (Design House) para projetos de Circuito Integrados, DFCHIP, implantado em um ambiente compartilhado com incubadora de empresas, CDT/UnB. Como resultado de suas pesquisas em microeletrônica, ele tem por volta de 50 publicações cientificas entre elas, um livro lançando pela ed. Springer, capítulos de livros, diversas conferencias internacionais (IEEE) e também alguns artigos em periódicos de relevância do IEEE."
  //   },
  //   {
  //     "email": "ulhoa@unb.br",
  //     "nome": "Sergio Costa Ulhoa",
  //     "bio": "Possui graduação em Física (bacharelado e licenciatura) pela Universidade de Brasília (2005). Tem experiência na área de Física, com ênfase em Relatividade Geral e Teoria de Campos, atuando principalmente nos seguintes temas: Teleparalelismo e Teorias de Calibre."
  //   },
  //   {
  //     "email": "avilas@unb.br",
  //     "nome": "Suzana Moreira Avila",
  //     "bio": " possui graduação em Engenharia Civil pela Universidade de Brasília (1993), mestrado em Estruturas e Construcao Civil pela Universidade de Brasília (1997) e doutorado em Engenharia Civil pela Pontifícia Universidade Católica do Rio de Janeiro (2002). Atualmente é professora adjunta da Universidade de Brasília, na Faculdade de Engenharia UnB-Gama, atuando junto aos cursos de Engenharia Automotiva e Engenharia de Energia. Tem experiência na área de Engenharia, com ênfase em Mecânica das Estruturas, Dinâmica Estrutural e Controle de Sistemas, atuando principalmente nos seguintes temas: dinâmica (linear e não-linear) e controle. É membro do corpo docente do Programa de Pós-Graduação em Integridade de Materiais da Universidade de Brasília."
  //   },
  //   {
  //     "email": "rodrigues.suelia@gmail.com ",
  //     "nome": "Suélia de Siqueira Rodrigues Fleury Rosa",
  //     "bio": "Possui graduação em Engenharia Eletrônica pela Universidade Estadual Paulista Júlio de Mesquita Filho (2001), Mestrado em Engenharia Eletrônica - Mecatrônica - Instituto Tecnológico de Aeronáutica (2005). Doutorado em Engenharia Eletrônica - Biomédica pela Universidade de Brasília (2008). Recebeu o Premio Nacional Santander-Universia de Biotecnologia pelo projeto de sua Tese de Doutorado em 2008 e o Prêmio Jovem Inventor da FAPDF, primeiro lugar em 2009. Como Orientadora recebeu o Prêmio Jovem Inventor da FAPDF, primeiro lugar, 2011. É revisor de congressos tais como: scientific committee collaborating with the - 21st International Congress of Mechanical Engineering; Annual International Conference of the IEEE Engineering in Medicine and Biology Society; Membro de Comitê Técnico e Cientifico VI CONFIAM - Congresso de Física Aplicada à Medicina; XVIII Congresso Brasileiro de Automática; do Congresso Nacional de Matemática Aplicada e Computacional CNMAC 2012 34; 2012 IEEE Symposium on Business, Engineering & Industrial Applications. Foi parecerista ad hoc avaliando trabalhos no Edital do Prêmio de Incentivo em Ciência e Tecnologia para o SUS em 2010. Foi parecerista ad hoc avaliando Projetos de pesquisa da Fundação de Amparo e Pesquisa do Distrito Federal - FAPDF. Tem experiência na área de Engenharia Biomédica, atuando principalmente em Modelagem de sistemas fisiologicos via Bond Graph. Suas áreas de pesquisa em Engenharia Biomédica: Physiological Modeling; Medical Devices and Systems and Neuroengineering. Pesquisadora e Fundadora do Laboratório de Engenharia e Biomaterial (BioEngLab - LEI) da Faculdade Gama Universidade de Brasilia UnB - FGA. Professora Adjunto do Curso Engenharia Eletrônica, Universidade de Brasilia (UnB) e do Curso de Pós-Graduação em Engenharia Biomédica UnB. Publicou 2 livros em língua portuguesa; 2 artigos em periódicos científicos, 52 artigos completos em congressos nacionais e internacionais, 1 capítulos de livro internacional e 5 depósitos de patentes. Co-orienta 2 teses de doutorado, orientou 1 dissertação de mestrado, orienta 2 dissertações de mestrado; orientou 1 monografia de lato sensu; 23 projetos de iniciação científica e 3 projetos de final de curso."
  //   },
  //   {
  //     "email": "sergiofreitas@unb.br",
  //     "nome": "Sergio Antônio Andrade de Freitas",
  //     "bio": "Graduado em Engenharia Elétrica (enfase eletrônica, Engenharia de Computação) pela Universidade Federal de Uberlândia (1990), Mestre em Computação pela Universidade Federal do Rio Grande do Sul (1993) e Doutor em Engenharia Elétrica pela Universidade Federal do Espírito Santo (2005). Desde 2009 é professor da Universidade de Brasília - UnB onde atua no curso de Engenharia de Software da Faculdade UnB Gama - FGA. Foi diretor de Ensino de Graduação a Distância (2010-2011) e Diretor Técnico de Graduação (2012) ambas diretorias do Decanato de Ensino de Graduação / UnB. Foi diretor da UG 154079 até março/2016. É membro do corpo docente do Programa de Pós-Graduação em Computação Aplicada (PPCA). Foi diretor do Centro de Educação a Distância (CEAD / UnB). Desde 2018 é Decano (Pró-Reitor) de Ensino da Graduação da UnB.  De 1999 a 2009 foi professor do Departamento de Informática da Universidade Federal do Espírito Santo - UFES e membro do Programa de Pós-Graduação em Informática - PPGI / UFES. Tem experiência na área de Ciência da Computação e Engenharia de Computação. Na UFES foi diretor de Pesquisa e Pós-Graduação da Pró-Reitoria de Pesquisa e Pós-Graduação, coordenador de Graduação do curso de Engenharia de Computação, Diretor Geral do Núcleo de Processamento de Dados e Coordenador Administrativo do PoP-ES / RNP. É avaliador do Sistema Nacional de Avaliação da Educação Superior - SINAES / INEP / MEC desde 2006."
  //   },
  //   {
  //     "email": "tais.calliero@gmail.com",
  //     "nome": "Tais Calliero Tognetti",
  //     "bio": "Possui graduação em Matemática Bacharelado pela Universidade de Santa Cruz do Sul (2000), mestrado em Engenharia Elétrica pela Universidade de São Paulo (2005), doutorado em Engenharia Elétrica pela Universidade Estadual de Campinas (2009) e Doutorado em Systèmes Automatiques pelo Institut National Des Sciences Appliquées de Toulouse, França. Pós-doutorado na Faculdade de Engenharia Elétrica e de Computação da UNICAMP. Tem experiência na área de Matemática, com ênfase em estabilidade de sistemas dinâmicos não-lineares, atuando principalmente nos seguintes temas: princípio de invariância de LaSalle, teoria de Lyapunov e desigualdades matriciais lineares."
  //   },
  //   {
  //     "email": "tatilista@unb.br",
  //     "nome": "Tatiane Evangelista",
  //     "bio": "Possui graduação em Matemática pela Universidade Estadual Paulista Júlio de Mesquita Filho (2003), mestrado em Ciências Matemática [Sjrp] pela Universidade Estadual Paulista Júlio de Mesquita Filho (2006) e doutorado em Matemática Aplicada pela Universidade Estadual de Campinas (2009). Atualmente é professor adjunta da Universidade de Brasília, campus Gama. Tem experiência na área de Matemática, atuando principalmente em otimização linear."
  //   },
  //   {
  //     "email": "thaismaiar@unb.br",
  //     "nome": "Thais Maia Araújo",
  //     "bio": "Atualmente é coordenadora e professora do curso de Engenharia de Energia da Faculdade UnB Gama. Trabalha com queimada de florestas, com emissão de poluentes veiculares, energias renováveis e gaseificação de biomassa. Leciona disciplinas na área térmica e planejamento energético. Possui graduação em Engenharia Industrial Química pela Faculdade de Engenharia Química de Lorena (1985), mestrado em Engenharia e Tecnologias Espaciais pelo Instituto Nacional de Pesquisas Espaciais (1988) e doutorado em Engenharia Mecânica pela Universidade Estadual Paulista Júlio de Mesquita Filho (1995)."
  //   },
  //   {
  //     "email": "thiagocordeiro@unb.br",
  //     "nome": "Thiago Felippe Kurudez Cordeiro",
  //     "bio": "Possui graduação em Engenharia Mecatrônica pela Universidade de Brasília (2009) e mestrado em Engenharia Eletrônica e Computação pelo Instituto Tecnológico de Aeronáutica (2012). Atualmente é professor Assistente da Universidade de Brasília e aluno de doutorado também pela Universidade de Brasília. Tem experiência na área de Engenharia Aeroespacial, com ênfase em fusão de dados, estimação de atitude e navegação inercial auxiliada."
  //   },
  //   {
  //     "email": "thiagofernandesoliveira@gmail.com ",
  //     "nome": "Thiago Fernandes Oliveira",
  //     "bio": "Graduação em Engenharia Mecânica (2006), mestrado em Ciências Mecânicas pela Universidade de Brasília (2011) e doutorado em andamento (início em 2011) com ênfase em geração de energia e desenvolvimento sustentável, atuando principalmente nos seguintes temas: desenvolvimento sustentável, turbina hidrocinética, difusores, montagem, automação e calibração de bancadas experimentais, instrumentação, sensores, transdutores, túnel de água e vento, medição de esforços estáticos e dinâmicos em aerofólios, visualização de escoamento, extensometria, LabView e SolidWorks. Doutorado com ênfase em medições de flutuação de pressão na superfície de pás de ventiladores axiais. "
  //   },
  //   {
  //     "email": "vandorissoli@gmail.com",
  //     "nome": "Vandor Roberto Vilardi Rissoli",
  //     "bio": "Professor da área de Informática e Tecnologia da UnB desde 2014. Passou a residir em Brasília em 2001, atuando como docente da graduação (cursos de Ciência da Computação e Sistemas de Informação) e pós-graduação (lato sensu em Banco de Dados, lato sensu em Data Warehouse e stricto sensu em Gestão do Conhecimento e da Tecnologia da Informação). Concluiu sua graduação em Análise de Sistemas na Universidade de Ribeirão Preto (UNAERP) em 1994, onde também se tornou especialista em Análise de Sistemas em 1996. Prosseguiu seus estudos com mestrado em Ciência da Computação, na área de Inteligência Artificial, na Universidade Federal de São Carlos (UFSCar) em 1999 e entre alguns cursos de extensão universitária na área de Informática, Administração e Educação também se tornou doutor em Informática na Educação na Universidade Federal do Rio Grande do Sul (UFRGS) em 2007. Vem trabalhando em projetos de pesquisa e desenvolvimento em várias áreas de conhecimento, envolvendo empresas, instituições governamentais e de ensino (Oracle, Banco do Brasil, Embrapa, Secretaria da Fazenda do Estado de São Paulo, UNAERP, UCB, entre outras), durante toda sua jornada profissional e acadêmica, onde, como estudante, conseguiu apoio financeiro de órgãos de fomento à pesquisa nacional (Fundap, Capes, CNPq, FAPDF e outros)."
  //   },
  //   {
  //     "email": "vrispoli@pgea.unb.br",
  //     "nome": "Vinicius de Carvalho Rispoli",
  //     "bio": "Professor Adjunto IV na Faculdade UnB Gama na Universidade de Brasília. Graduação (2005) e Mestrado (2007) em Matemática; e Doutorado (2014), com período sanduíche na University of Michigan, em Engenharia Biomédica todos pela Universidade de Brasília. Tenho experiência/interesse em Matemática Aplicada, nas seguintes áreas: Equações Diferenciais Ordinárias, Equações Diferenciais Parcias, Métodos Numéricos para Equações Diferenciais e Processamento de Imagens. Atualmente é Vice-Coordenador Acadêmico Institucional do Programa de Mestrado Profissional em Matemática da Universidade de Brasília (Profmat/UnB)."
  //   },
  //   {
  //     "email": "vcastro@unb.br",
  //     "nome": "Vanessa Maria de Castro",
  //     "bio": "Professora Adjunta da Universidade de Brasília, UnB, Faculdade UnB Gama, curso de Engenharia de Energia. Doutora em Desenvolvimento Sustentável pela UnB (2004), Mestre em Educação pela University of Reading/Inglaterra (1999) e Geógrafa pelo UniCeub (1992). Pesquisa na área de sociedade e tecnologia, avaliação de políticas públicas, políticas educacionais, programas de transferência de renda e indicadores de desenvolvimento sustentável e socioeconômicos. Docente do Programa de Pós Graduação em Direitos Humanos e Cidadania, do Centro de Estudos Avançados Multidisciplinares da Universidade de Brasília"
  //   },
  //   {
  //     "email": "wandercleber@gmail.com",
  //     "nome": "Wander Cleber M. Pereira da Silva",
  //     "bio": "Paraense de Bujaru, cursou História, Filosofia e Psicologia na Universidade Federal do Pará - UFPa, Mestrado e Doutorado em Psicologia na Universidade de Brasília - UnB. Fez especialização em Ontologia da Linguagem na Universidade Católica de Brasília, é certificado como Coaching Empresarial pela Newfield Consulting - Brasil/USA. Foi Professor do IBMEC-Brasília, e Coordenador do curso de especialização em Governança Corporativa da FGV (in company), Coordenador do curso de Governança em TI da Fundação Universa e do UniDF. Atuou como consultor em diversas organizações públicas na implantação de modelos de gestão de excelência. Foi Presidente-Fundador do Instituto de Tecnologia, Gestão e Educação (ITGE)l. Participa de grupos de pesquisa em Governança de TI, com ênfase no setor público, Aprendizagem Organizacional, Gestão do Conhecimento e Ética nas organizações. Atualmente é professor do Curso de Engenharia de Software da Faculdade UnB-Gama (FGA)"
  //   },
  //   {
  //     "email": "waamaral@unb.br",
  //     "nome": "Wellington Avelino do Amaral",
  //     "bio": "Possui graduação em Engenharia Elétrica pela Universidade Estadual Paulista(2002), mestrado em Engenharia Elétrica pela Universidade de Brasília(2004)e doutorado em Engenharia Elétrica pela Universidade Estadual de Campinas(2009). Atualmente é Professor Adjunto da Universidade de Brasília e Assessor científico do Fundação de Amparo à Pesquisa do Estado de São Paulo. Tem experiência na área de Engenharia Elétrica, com ênfase em Projeto de Circuitos Integrados. Atuando principalmente nos seguintes temas:Low Noise Amplifier, RX Front-End, Radio Frequency, cmos. "
  //   },
  //   {
  //     "email": "wytler@yahoo.com",
  //     "nome": "Wytler Cordeiro dos Santos",
  //     "bio": " Possui graduação em Bacharel em Física pela Universidade de Brasília (1998), graduação em Licenciatura em Física pela Universidade de Brasília (2001), mestrado em Física pela Universidade de Brasília (2001) e doutorado em Física pela Universidade de Brasília (2006). Atualmente é professor adjunto da Universidade de Brasília. Tem experiência na área da Teoria de Campos, Física das Partículas Elementares e Relatividade Geral."
  //   },
  //   {
  //     "email": "yehoshua_115@yahoo.com",
  //     "nome": "Yevsey Yehoshua Sobolevsky",
  //     "bio": "Possui graduação em matematica pela Universidade estatal de Voronej(1973), mestrado em matematica pela universidade Estatal de Voronej(1975), doutorado em matematica pela universidade Estatal de Voronej(1985) e pós-doutorado pela Hebrew University Of Jerusalem(1995). Atualmente é Professor Adjunto da Universidade de Brasília. Tem experiência na área de Matemática, com ênfase em Matemática Aplicada. Atuando principalmente nos seguintes temas:average principle, differential equation."
  //   }
   ]
    export default todosOsProfessores;
  
  