export interface LocalizedString {
  en: string;
  es: string;
  fr: string;
  de: string;
  pt: string;
  zh?: string;
  'zh-hant'?: string;
}

export interface HomeFAQ {
  id: string;
  question: LocalizedString;
  answerHtml: LocalizedString;
  answerText: LocalizedString;
}

export const HOME_FAQS: HomeFAQ[] = [
  {
    id: 'how_to_make',
    question: {
      en: 'How to make a budget planner?',
      es: '¿Cómo hacer un planificador de presupuesto?',
      fr: 'Comment faire un planificateur de budget ?',
      de: 'Wie erstellt man einen Budgetplaner?',
      pt: 'Como fazer um planejador de orçamento?',
    },
    answerHtml: {
      en: 'To make a budget planner, start by calculating your total monthly net take-home income. Next, list all recurring expenses, categorizing them into fixed essentials (rent, utilities, insurance) and variable costs (groceries, fuel). Set clear targets for debt reduction and emergency savings, and verify that your planned outflows match your income. You can draft your plan on paper, build a custom spreadsheet, or use an <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">online budget planner</a> to automatically normalize weekly and yearly payments into a balanced monthly plan.',
      es: 'Para hacer un planificador de presupuesto, comience calculando sus ingresos netos mensuales reales. Luego, enumere todos los gastos recurrentes dividiéndolos en elementos esenciales fijos (vivienda, servicios, seguros) y costos variables (alimentación, transporte). Establezca objetivos para reducción de deudas y fondos de emergencia, asegurando que las salidas planificadas cuadren con los ingresos. Puede usar papel, una hoja de cálculo o un <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">planificador de presupuesto en línea</a> para normalizar pagos periódicos en un plan mensual equilibrado.',
      fr: 'Pour créer un planificateur de budget, commencez par calculer vos revenus nets mensuels disponibles. Ensuite, listez toutes les dépenses récurrentes en les divisant en charges fixes essentielles (loyer, factures, assurances) et coûts variables (alimentation, transport). Fixez des objectifs d\'épargne et de remboursement, puis vérifiez l\'équilibre entre entrées et sorties. Vous pouvez utiliser du papier, un tableur ou un <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">planificateur de budget en ligne</a> pour normaliser automatiquement vos paiements en un plan mensuel équilibré.',
      de: 'Um einen Budgetplaner zu erstellen, ermitteln Sie zunächst Ihr monatliches Nettoeinkommen. Listen Sie anschließend alle wiederkehrenden Ausgaben auf, aufgeteilt in feste Fixkosten (Miete, Nebenkosten, Versicherungen) und variable Lebenshaltungskosten (Lebensmittel, Mobilität). Setzen Sie klare Spar- und Schuldentilgungsziele und stellen Sie sicher, dass Einnahmen und Ausgaben übereinstimmen. Nutzen Sie Papier, Tabellen oder einen <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">Online-Budgetplaner</a>, um unregelmäßige Zahlungen automatisch in einen monatlichen Plan umzurechnen.',
      pt: 'Para fazer um planejador de orçamento, comece calculando a sua renda líquida mensal real. Em seguida, liste todas as despesas recorrentes, separando os custos fixos essenciais (moradia, contas, seguros) dos custos variáveis (alimentação, transporte). Defina metas claras de poupança e quitação de dívidas, conferindo se os gastos planejados cabem na sua renda. Você pode usar papel, uma planilha ou um <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">planejador de orçamento online</a> para equilibrar seu fluxo de caixa mensal.',
    },
    answerText: {
      en: 'To make a budget planner, start by calculating your total monthly net take-home income. Next, list all recurring expenses, categorizing them into fixed essentials (rent, utilities, insurance) and variable costs (groceries, fuel). Set clear targets for debt reduction and emergency savings, and verify that your planned outflows match your income. You can draft your plan on paper, build a custom spreadsheet, or use an online budget planner to automatically normalize weekly and yearly payments into a balanced monthly plan.',
      es: 'Para hacer un planificador de presupuesto, comience calculando sus ingresos netos mensuales reales. Luego, enumere todos los gastos recurrentes dividiéndolos en elementos esenciales fijos y costos variables. Establezca objetivos para reducción de deudas y fondos de emergencia, asegurando que las salidas planificadas cuadren con los ingresos.',
      fr: 'Pour créer un planificateur de budget, commencez par calculer vos revenus nets mensuels disponibles. Ensuite, listez toutes les dépenses récurrentes en charges fixes et coûts variables. Fixez des objectifs d\'épargne et de remboursement.',
      de: 'Um einen Budgetplaner zu erstellen, ermitteln Sie zunächst Ihr monatliches Nettoeinkommen. Listen Sie anschließend alle Ausgaben in feste Fixkosten und variable Kosten auf und setzen Sie Sparziele.',
      pt: 'Para fazer um planejador de orçamento, comece calculando a sua renda líquida mensal real. Em seguida, liste todas as despesas recorrentes, separando custos fixos e variáveis, e defina metas de poupança e dívidas.',
    },
  },
  {
    id: 'how_to_use',
    question: {
      en: 'How to use a budget planner?',
      es: '¿Cómo usar un planificador de presupuesto?',
      fr: 'Comment utiliser un planificateur de budget ?',
      de: 'Wie benutzt man einen Budgetplaner?',
      pt: 'Como usar um planejador de orçamento?',
    },
    answerHtml: {
      en: 'Use a budget planner by entering your anticipated income at the start of each month and allocating funds across fixed necessities, flexible living expenses, and savings targets. Throughout the month, log transactions or track category balances against your planned limits. Regularly review your cash flow, adjust categories when unexpected expenses occur, and recalculate your numbers whenever your income or recurring bills change.',
      es: 'Utilice un planificador de presupuesto registrando sus ingresos previstos al comienzo de cada mes y distribuyendo los fondos entre necesidades fijas, gastos flexibles y metas de ahorro. A lo largo del mes, compare los gastos reales con los límites asignados. Revise con regularidad su flujo de caja, ajuste categorías ante imprevistos y recalcule sus cifras cuando cambien sus ingresos o gastos fijos.',
      fr: 'Utilisez un planificateur de budget en inscrivant vos revenus attendus en début de mois et en répartissant les fonds entre nécessités fixes, dépenses courantes et objectifs d\'épargne. Pendant le mois, suivez vos dépenses par rapport aux plafonds fixés. Analysez régulièrement votre trésorerie, réajustez en cas d\'imprévus et recalculez dès que vos revenus ou charges évoluent.',
      de: 'Verwenden Sie einen Budgetplaner, indem Sie zu Beginn des Monats Ihr geplantes Einkommen eintragen und es auf feste Ausgaben, variable Kosten und Sparziele verteilen. Verfolgen Sie im Laufe des Monats Ihre Ausgaben anhand der festgelegten Obergrenzen. Überprüfen Sie regelmäßig Ihren Cashflow und passen Sie Kategorien an, wenn unerwartete Ausgaben auftreten.',
      pt: 'Utilize um planejador de orçamento inserindo a renda estimada no início do mês e distribuindo os valores entre necessidades fixas, despesas do dia a dia e metas de reserva. Durante o mês, acompanhe os gastos reais em relação aos limites planejados. Revise seu fluxo de caixa com frequência e ajuste categorias quando surgirem imprevistos.',
    },
    answerText: {
      en: 'Use a budget planner by entering your anticipated income at the start of each month and allocating funds across fixed necessities, flexible living expenses, and savings targets. Throughout the month, log transactions or track category balances against your planned limits. Regularly review your cash flow, adjust categories when unexpected expenses occur, and recalculate your numbers whenever your income or recurring bills change.',
      es: 'Utilice un planificador de presupuesto registrando sus ingresos previstos al comienzo de cada mes y distribuyendo los fondos entre necesidades fijas, gastos flexibles y metas de ahorro.',
      fr: 'Utilisez un planificateur de budget en inscrivant vos revenus attendus en début de mois et en répartissant les fonds entre nécessités fixes, dépenses courantes et épargne.',
      de: 'Verwenden Sie einen Budgetplaner, indem Sie Ihr monatliches Einkommen aufteilen und Ausgaben mit den geplanten Obergrenzen vergleichen.',
      pt: 'Utilize um planejador de orçamento distribuindo sua renda mensal entre despesas fixas, gastos flexíveis e objetivos de poupança.',
    },
  },
  {
    id: 'best_planner',
    question: {
      en: 'What is the best budget planner?',
      es: '¿Cuál es el mejor planificador de presupuesto?',
      fr: 'Quel est le meilleur planificateur de budget ?',
      de: 'Was ist der beste Budgetplaner?',
      pt: 'Qual é o melhor planejador de orçamento?',
    },
    answerHtml: {
      en: 'The best budget planner is one that fits your personal financial style, is easy to maintain, and provides clear visibility without unnecessary friction. Effective planners offer transparent income and expense tracking, flexible budgeting frameworks (like 50/30/20 or zero-based planning), and automated calculations. <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">My Real Budget</a> is designed as a free, privacy-focused online planner that normalizes payment frequencies, balances cash flow, and offers downloadable templates without requiring account logins or bank linking.',
      es: 'El mejor planificador de presupuesto es aquel que se adapta a su rutina personal, es fácil de mantener y ofrece claridad sin complicaciones innecesarias. Debe permitir un seguimiento transparente, admitir métodos como 50/30/20 o base cero y calcular subtotales automáticamente. <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">My Real Budget</a> es gratuito, respeta la privacidad, normaliza frecuencias y ofrece plantillas sin exigir crear cuentas ni vincular bancos.',
      fr: 'Le meilleur planificateur est celui qui correspond à vos habitudes, reste simple à actualiser et offre une visibilité immédiate sans contraintes inutiles. Il doit proposer un suivi clair, supporter des méthodes comme le 50/30/20 ou le budget base zéro, et automatiser les calculs. <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">My Real Budget</a> est un outil gratuit, respectueux de votre vie privée, sans compte obligatoire ni connexion bancaire.',
      de: 'Der beste Budgetplaner passt zu Ihrem persönlichen Alltag, erfordert wenig Pflegeaufwand und schafft sofortige Übersicht. Gute Planer bieten transparente Verfolgung, flexible Rahmenwerke (wie 50/30/20 oder Null-basiert) und automatische Berechnungen. <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">My Real Budget</a> ist kostenlos, datenschutzorientiert, rechnet Zahlungsintervalle um und benötigt weder Registrierung noch Bankverbindung.',
      pt: 'O melhor planejador de orçamento é aquele que se adapta à sua rotina, exige pouca manutenção e traz clareza imediata sem atrito. Deve oferecer acompanhamento transparente, suportar métodos consagrados como 50/30/20 e base zero, e calcular totais automaticamente. O <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">My Real Budget</a> é gratuito, 100% focado em privacidade e não exige cadastro nem vínculo bancário.',
    },
    answerText: {
      en: 'The best budget planner is one that fits your personal financial style, is easy to maintain, and provides clear visibility without unnecessary friction. Effective planners offer transparent income and expense tracking, flexible budgeting frameworks (like 50/30/20 or zero-based planning), and automated calculations. My Real Budget is designed as a free, privacy-focused online planner that normalizes payment frequencies, balances cash flow, and offers downloadable templates without requiring account logins or bank linking.',
      es: 'El mejor planificador de presupuesto es aquel que se adapta a su rutina personal, es fácil de mantener y ofrece claridad sin complicaciones innecesarias. My Real Budget es gratuito y privado.',
      fr: 'Le meilleur planificateur est celui qui correspond à vos habitudes et reste simple à actualiser. My Real Budget est un outil gratuit et respectueux de la vie privée.',
      de: 'Der beste Budgetplaner passt zu Ihrem Alltag und schafft sofortige Übersicht. My Real Budget ist kostenlos, sicher und ohne Registrierung nutzbar.',
      pt: 'O melhor planejador de orçamento é aquele que se adapta à sua rotina com simplicidade e clareza. O My Real Budget é gratuito, privado e sem burocracia.',
    },
  },
  {
    id: 'where_to_buy',
    question: {
      en: 'Where can I buy a budget planner?',
      es: '¿Dónde puedo comprar un planificador de presupuesto?',
      fr: 'Où puis-je acheter un planificateur de budget ?',
      de: 'Wo kann man einen Budgetplaner kaufen?',
      pt: 'Onde posso comprar um planejador de orçamento?',
    },
    answerHtml: {
      en: 'You can purchase physical budget planner books and notebooks at bookstores, stationery shops, and major online retailers if you prefer handwriting your expenses. Alternatively, digital planners, spreadsheet worksheets, and online planning tools offer significant advantages by automating calculations and adapting easily over time. My Real Budget does not sell physical paper books; instead, we provide free interactive browser tools and downloadable spreadsheet templates that you can use immediately on any device.',
      es: 'Puede adquirir cuadernos y planificadores de presupuesto físicos en librerías, papelerías y tiendas en línea si prefiere anotar sus gastos a mano. Sin embargo, las herramientas digitales y hojas de cálculo ofrecen ventajas clave al automatizar sumas y adaptarse con flexibilidad. My Real Budget no vende agendas impresas; ofrecemos herramientas interactivas gratuitas en el navegador y plantillas descargables para usar al instante.',
      fr: 'Vous pouvez acheter des carnets de budget papier en librairie, papeterie ou magasins en ligne si vous préférez écrire à la main. En revanche, les outils numériques et tableurs automatisent les calculs et s\'adaptent plus facilement. My Real Budget ne vend pas de carnets physiques, mais met à disposition des outils en ligne gratuits et des modèles téléchargeables prêts à l\'emploi.',
      de: 'Physische Budgetplaner-Bücher und Notizhefte sind im Buchhandel, Schreibwarengeschäften und bei Online-Händlern erhältlich, wenn Sie handschriftliche Aufzeichnungen bevorzugen. Digitale Planer und Tabellen automatisieren dagegen alle Berechnungen und sparen viel Zeit. My Real Budget verkauft keine Papierbücher, sondern stellt kostenlose Browser-Tools und Tabellen-Vorlagen zur Verfügung.',
      pt: 'Você pode comprar planners e cadernos de orçamento físicos em livrarias e papelarias se preferir anotar à mão. No entanto, ferramentas digitais e planilhas oferecem a vantagem de calcular tudo automaticamente. O My Real Budget não vende livros físicos; nós oferecemos ferramentas interativas gratuitas no navegador e modelos prontos para download.',
    },
    answerText: {
      en: 'You can purchase physical budget planner books and notebooks at bookstores, stationery shops, and major online retailers if you prefer handwriting your expenses. Alternatively, digital planners, spreadsheet worksheets, and online planning tools offer significant advantages by automating calculations and adapting easily over time. My Real Budget does not sell physical paper books; instead, we provide free interactive browser tools and downloadable spreadsheet templates that you can use immediately on any device.',
      es: 'Puede comprar cuadernos en librerías o papelerías si prefiere el formato físico. Sin embargo, las herramientas digitales en línea como My Real Budget son gratuitas y automatizan los cálculos.',
      fr: 'Vous pouvez trouver des carnets papier en librairie, mais les outils numériques gratuits comme My Real Budget automatisent les calculs sans frais.',
      de: 'Physische Bücher gibt es im Buchhandel. My Real Budget bietet dagegen kostenlose digitale Werkzeuge und Vorlagen direkt im Browser.',
      pt: 'Você pode comprar planners físicos em papelarias, mas ferramentas digitais como o My Real Budget são gratuitas e calculam tudo instantaneamente.',
    },
  },
  {
    id: 'f503020_divide',
    question: {
      en: 'How is money divided using the 50-30-20 method?',
      es: '¿Cómo se divide el dinero con el método 50-30-20?',
      fr: 'Comment l\'argent est-il divisé selon la méthode 50-30-20 ?',
      de: 'Wie wird das Geld nach der 50-30-20-Methode aufgeteilt?',
      pt: 'Como o dinheiro é dividido pelo método 50-30-20?',
    },
    answerHtml: {
      en: 'Under the 50-30-20 method, your net take-home pay is divided into three distinct proportional categories: 50% for Needs (essential living costs such as rent or mortgage, groceries, utilities, and basic transit), 30% for Wants (lifestyle choices such as dining out, subscriptions, and entertainment), and 20% for Savings and Debt (emergency funds, retirement investing, and extra loan principal). Try our free <a href="/50-30-20-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">50/30/20 budget calculator</a> to calculate your exact targets.',
      es: 'Con el método 50-30-20, sus ingresos netos se reparten en tres proporciones claras: 50% para Necesidades (gastos indispensables como alquiler, alimentación básica, servicios y transporte), 30% para Deseos (ocio, salidas a comer, suscripciones y entretenimiento) y 20% para Ahorro y Deudas (fondo de emergencia, inversiones y amortización acelerada). Pruebe nuestra <a href="/50-30-20-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">calculadora de presupuesto 50/30/20</a> gratuita para obtener sus valores exactos.',
      fr: 'Selon la méthode 50-30-20, votre revenu net disponible est divisé en trois catégories : 50 % pour les Besoins (logement, courses alimentaires, factures courantes, transports obligatoires), 30 % pour les Envies (sorties, abonnements, loisirs) et 20 % pour l\'Épargne et les Dettes (fonds d\'urgence, investissements, remboursements anticipés). Testez notre <a href="/50-30-20-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">calculateur 50/30/20 gratuit</a> pour connaître vos montants cibles.',
      de: 'Nach der 50-30-20-Methode wird das Nettoeinkommen in drei Anteile aufgeteilt: 50 % für Grundbedürfnisse (Miete, Lebensmittel, Strom, Pendelkosten), 30 % für persönliche Wünsche (Restaurantbesuche, Abos, Freizeit) und 20 % für Sparen und Schuldenabbau (Notgroschen, Altersvorsorge, Sondertilgungen). Nutzen Sie unseren kostenlosen <a href="/50-30-20-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">50/30/20-Rechner</a> für Ihre genauen Zielwerte.',
      pt: 'No método 50-30-20, sua renda líquida é distribuída em três blocos percentuais: 50% para Necessidades (moradia, supermercado essencial, contas básicas e transporte), 30% para Desejos (lazer, restaurantes, assinaturas e passeios) e 20% para Poupança e Dívidas (reserva de emergência, investimentos e quitação antecipada). Conheça nossa <a href="/50-30-20-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">calculadora 50/30/20 gratuita</a> para calcular seus limites ideais.',
    },
    answerText: {
      en: 'Under the 50-30-20 method, your net take-home pay is divided into three distinct proportional categories: 50% for Needs (essential living costs such as rent or mortgage, groceries, utilities, and basic transit), 30% for Wants (lifestyle choices such as dining out, subscriptions, and entertainment), and 20% for Savings and Debt (emergency funds, retirement investing, and extra loan principal). Try our free 50/30/20 budget calculator to calculate your exact targets.',
      es: 'Con el método 50-30-20, los ingresos netos se dividen en: 50% Necesidades, 30% Deseos y 20% Ahorro y amortización de deudas.',
      fr: 'La méthode 50-30-20 divise les revenus en 50 % Besoins vitaux, 30 % Envies et loisirs, et 20 % Épargne et désendettement.',
      de: 'Die 50-30-20-Methode teilt das Nettoeinkommen in 50 % Grundbedürfnisse, 30 % Wünsche und 20 % Sparen & Schuldenabbau.',
      pt: 'O método 50-30-20 divide sua renda líquida em: 50% Necessidades, 30% Desejos e 20% Poupança e Dívidas.',
    },
  },
  {
    id: 'f503020_rule',
    question: {
      en: 'What is the 50/30/20 rule?',
      es: '¿Qué es la regla 50/30/20?',
      fr: 'Qu\'est-ce que la règle 50/30/20 ?',
      de: 'Was ist die 50/30/20-Regel?',
      pt: 'O que é a regra 50/30/20?',
    },
    answerHtml: {
      en: 'The 50/30/20 rule is a popular percentage-based budgeting guideline designed to create financial balance without micro-tracking every individual purchase. By splitting after-tax income into 50% essentials, 30% lifestyle wants, and 20% savings and debt reduction, it provides an intuitive benchmark for evaluating whether your fixed overhead is sustainable and helps you intentionally allocate money toward savings and debt repayment.',
      es: 'La regla 50/30/20 es una guía financiera porcentual formulada para crear equilibrio sin obligar a registrar cada café o recibo individual. Al distribuir el dinero neto en 50% gastos esenciales, 30% estilo de vida y 20% ahorro e inversión, proporciona una referencia intuitiva para comprobar si sus costes fijos son sostenibles a largo plazo.',
      fr: 'La règle 50/30/20 est un repère budgétaire en pourcentages pensé pour équilibrer ses finances sans surveiller chaque dépense au centime près. En allouant 50 % aux besoins, 30 % aux plaisirs et 20 % à l\'épargne, elle permet de savoir rapidement si votre train de vie et vos charges fixes sont viables.',
      de: 'Die 50/30/20-Regel ist eine prozentuale Leitlinie für ein ausgewogenes Budget, ohne jeden Kassenbon einzeln erfassen zu müssen. Mit 50 % für lebensnotwendige Ausgaben, 30 % für persönliche Wünsche und 20 % für Ersparnisse schafft sie verlässliche Leitplanken für finanzielle Stabilität.',
      pt: 'A regra 50/30/20 é uma diretriz orçamentária baseada em porcentagens, criada para manter o equilíbrio financeiro sem a necessidade de anotar cada pequeno centavo. Dividindo os recursos em 50% essenciais, 30% desejos e 20% poupança, serve como termômetro prático da sua saúde financeira.',
    },
    answerText: {
      en: 'The 50/30/20 rule is a popular percentage-based budgeting guideline designed to create financial balance without micro-tracking every individual purchase. By splitting after-tax income into 50% essentials, 30% lifestyle wants, and 20% savings and debt reduction, it provides an intuitive benchmark for evaluating whether your fixed overhead is sustainable and helps you intentionally allocate money toward savings and debt repayment.',
      es: 'La regla 50/30/20 es una pauta presupuestaria que divide el ingreso neto en 50% necesidades, 30% deseos y 20% ahorro y deudas.',
      fr: 'La règle 50/30/20 est un principe simple : 50 % pour les besoins, 30 % pour les envies et 20 % pour l\'épargne.',
      de: 'Die 50/30/20-Regel ist eine Leitlinie: 50 % Lebensnotwendiges, 30 % Wünsche und 20 % Ersparnisse und Schuldentilgung.',
      pt: 'A regra 50/30/20 divide a renda líquida em 50% gastos básicos, 30% estilo de vida e 20% construção de patrimônio e dívidas.',
    },
  },
  {
    id: 'f503020_not_best',
    question: {
      en: 'When might the 50/30/20 rule not be the best saving strategy to use?',
      es: '¿Cuándo la regla 50/30/20 podría no ser la mejor estrategia de ahorro?',
      fr: 'Quand la règle 50/30/20 n\'est-elle pas la meilleure stratégie d\'épargne ?',
      de: 'Wann ist die 50/30/20-Regel möglicherweise nicht die beste Sparstrategie?',
      pt: 'Quando a regra 50/30/20 pode não ser a melhor estratégia de economia?',
    },
    answerHtml: {
      en: 'The 50/30/20 rule may not be the ideal strategy if you live in an expensive housing market where rent alone consumes half your paycheck, if you have irregular freelance earnings, or if you earn a low income where essential needs take 70% or more of net pay. Additionally, individuals carrying aggressive, high-interest credit card debt often benefit from temporarily reducing lifestyle wants below 30% to pay off expensive balances faster. In these circumstances, an adaptable ratio or a <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">zero-based budget</a> works better.',
      es: 'La regla 50/30/20 puede no ser óptima si vive en una ciudad donde el alquiler absorbe por sí solo la mitad del sueldo, si tiene ingresos freelance variables o si sus necesidades esenciales superan el 70% del ingreso. Además, quienes tienen deudas con intereses muy altos suelen preferir recortar deseos temporalmente por debajo del 30% para amortizar antes. En esos casos, una proporción adaptada o un <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">presupuesto base cero</a> funciona mucho mejor.',
      fr: 'Cette règle peut être inadaptée si vous vivez dans une métropole où le loyer dépasse 50 % de vos revenus, si vos revenus sont très irréguliers, ou si vos charges incompressibles atteignent 70 % ou plus. De même, en présence de dettes à taux élevés, réduire temporairement les envies sous les 30 % permet de se désendetter plus vite. Un ratio personnalisé ou un <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">budget base zéro</a> sera alors plus pertinent.',
      de: 'Die 50/30/20-Regel passt oft nicht, wenn Sie in einer teuren Großstadt leben und die Miete bereits 50 % des Einkommens verschlingt, bei stark schwankenden Einkünften oder wenn Grundbedürfnisse 70 % übersteigen. Wer teure Konsumschulden abbauen möchte, sollte Wünsche vorübergehend unter 30 % senken. Hier eignet sich ein angepasster Schlüssel oder ein <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">Null-basiertes Budget</a> besser.',
      pt: 'A regra 50/30/20 pode ser inviável para quem mora em cidades com custo de moradia muito elevado (onde o aluguel consome metade do salário), tem renda instável como autônomo ou quando as contas básicas representam 70% da renda. Quem tem dívidas caras no cartão também deve reduzir desejos para quitá-las antes. Nesses cenários, proporções flexíveis ou o <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">orçamento base zero</a> trazem melhores resultados.',
    },
    answerText: {
      en: 'The 50/30/20 rule may not be the ideal strategy if you live in an expensive housing market where rent alone consumes half your paycheck, if you have irregular freelance earnings, or if you earn a low income where essential needs take 70% or more of net pay. Additionally, individuals carrying aggressive, high-interest credit card debt often benefit from temporarily reducing lifestyle wants below 30% to pay off expensive balances faster. In these circumstances, an adaptable ratio or a zero-based budget works better.',
      es: 'La regla 50/30/20 no es ideal con alquileres extremos, ingresos irregulares o deudas de alto interés donde un presupuesto base cero es más eficaz.',
      fr: 'La règle 50/30/20 montre ses limites face aux loyers très élevés, aux revenus fluctuants ou aux dettes urgentes à rembourser.',
      de: 'In teuren Wohngegenden oder bei stark schwankendem Einkommen stößt die Regel an Grenzen. Ein Null-basiertes Budget ist dann oft besser.',
      pt: 'A regra 50/30/20 pode não funcionar em regiões de moradia cara ou com dívidas elevadas, situações em que o orçamento base zero é superior.',
    },
  },
  {
    id: 'f503020_budget_rule',
    question: {
      en: 'What is the 50/30/20 budget rule?',
      es: '¿Qué es la regla presupuestaria 50/30/20?',
      fr: 'Qu\'est-ce que la règle budgétaire 50/30/20 ?',
      de: 'Was ist die 50/30/20-Budgetregel?',
      pt: 'O que é a regra de orçamento 50/30/20?',
    },
    answerHtml: {
      en: 'The 50/30/20 budget rule refers to the same structured framework that allocates 50% of after-tax income to survival essentials, 30% to discretionary enjoyment, and 20% to savings and debt payoff. It serves as a benchmark rather than an inflexible rule. Depending on your life stage, you can modify the percentages—such as 60/20/20 or 70/15/15—to match your real-world living costs while maintaining intentional financial direction.',
      es: 'La regla presupuestaria 50/30/20 alude al marco estructurado que reparte el 50% del sueldo neto a supervivencia y hogar, 30% a entretenimiento y 20% a reservas y amortizaciones. Funciona como guía orientativa más que como imposición rígida. Según su momento de vida, puede ajustar los porcentajes (como 60/20/20 o 70/15/15) sin perder el rumbo financiero.',
      fr: 'La règle budgétaire 50/30/20 désigne ce cadre qui consacre 50 % des revenus nets aux charges indispensables, 30 % aux dépenses plaisir et 20 % à l\'épargne ou aux dettes. C\'est un repère modifiable selon vos réalités (comme 60/20/20 ou 70/15/15) pour garder le contrôle tout en restant réaliste.',
      de: 'Die 50/30/20-Budgetregel beschreibt den Rahmen aus 50 % existenziellen Grundkosten, 30 % persönlichem Wohlbefinden und 20 % Spar- sowie Schuldentilgung. Sie ist kein starres Dogma: Je nach Lebenslage können Quoten wie 60/20/20 oder 70/15/15 gewählt werden, um gezielte finanzielle Fortschritte zu sichern.',
      pt: 'A regra de orçamento 50/30/20 é o sistema que divide a renda líquida em 50% para sobrevivência e contas, 30% para lazer e estilo de vida e 20% para poupança e dívidas. Trata-se de uma bússola adaptável: variações como 60/20/20 ou 70/15/15 podem ser adotadas conforme o custo de vida real da sua região.',
    },
    answerText: {
      en: 'The 50/30/20 budget rule refers to the same structured framework that allocates 50% of after-tax income to survival essentials, 30% to discretionary enjoyment, and 20% to savings and debt payoff. It serves as a benchmark rather than an inflexible rule. Depending on your life stage, you can modify the percentages—such as 60/20/20 or 70/15/15—to match your real-world living costs while maintaining intentional financial direction.',
      es: 'La regla presupuestaria 50/30/20 asigna 50% a necesidades, 30% a deseos y 20% a ahorros, con proporciones ajustables según su situación real.',
      fr: 'La règle budgétaire 50/30/20 est un modèle souple : 50 % besoins, 30 % envies, 20 % épargne, modifiable selon vos contraintes.',
      de: 'Die 50/30/20-Budgetregel ist ein Richtwert mit 50 % Grundkosten, 30 % Wünschen und 20 % Sparen, anpassbar an individuelle Lebenslagen.',
      pt: 'A regra de orçamento 50/30/20 divide o salário em 50% necessidades, 30% desejos e 20% metas financeiras, servindo como modelo ajustável.',
    },
  },
  {
    id: 'zbb_what_is',
    question: {
      en: 'What is a zero-based budget?',
      es: '¿Qué es un presupuesto base cero?',
      fr: 'Qu\'est-ce qu\'un budget base zéro ?',
      de: 'Was ist ein Null-basiertes Budget?',
      pt: 'O que é um orçamento base zero?',
    },
    answerHtml: {
      en: 'A zero-based budget is a planning approach where your total monthly income minus all planned expenses, savings contributions, and debt payments equals exactly zero: Income − Expenses − Savings − Debt = $0. Reaching zero does not mean having an empty bank account; it means every single dollar of income is intentionally assigned to a designated category before you spend it, leaving no money unaccounted for. You can build one with our <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">zero-based budget planner</a>.',
      es: 'Un presupuesto base cero es un método de planificación donde sus ingresos mensuales totales menos todos los gastos previstos, ahorros y deudas equivalen exactamente a cero: Ingresos − Gastos − Ahorro − Deuda = $0. Llegar a cero no significa vaciar su cuenta bancaria; significa que cada peso o euro tiene un rol asignado antes de gastarlo, sin dejar dinero sin rumbo. Puede construir uno con nuestro <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">planificador base cero</a>.',
      fr: 'Le budget base zéro est une méthode où le total de vos revenus diminué de toutes les dépenses prévues, de l\'épargne et des dettes donne exactement zéro : Revenus − Dépenses − Épargne − Dettes = 0 €. Arriver à zéro ne veut pas dire vider son compte en banque, mais assigner un rôle précis à chaque euro avant le début du mois. Concevez le vôtre avec notre <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">planificateur base zéro</a>.',
      de: 'Ein Null-basiertes Budget ist ein Planungsansatz, bei dem das gesamte Monatseinkommen abzüglich aller Ausgaben, Sparbeiträge und Tilgungen genau null ergibt: Einkommen − Ausgaben − Sparen − Schulden = 0 €. Null bedeutet nicht, dass das Bankkonto leer ist, sondern dass jeder einzelne Euro vor Monatsbeginn einen festen Einsatzzweck erhält. Erstellen Sie eines mit unserem <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">Null-basierten Budgetplaner</a>.',
      pt: 'O orçamento base zero é uma metodologia em que o total de receitas menos todas as despesas planejadas, aportes de poupança e quitações é igual a zero: Renda − Gastos − Poupança − Dívidas = R$ 0. Chegar a zero não significa zerar a conta bancária, mas garantir que cada centavo receba uma função intencional antes de ser gasto. Crie o seu com o nosso <a href="/zero-based-budget/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">planejador base zero</a>.',
    },
    answerText: {
      en: 'A zero-based budget is a planning approach where your total monthly income minus all planned expenses, savings contributions, and debt payments equals exactly zero: Income − Expenses − Savings − Debt = $0. Reaching zero does not mean having an empty bank account; it means every single dollar of income is intentionally assigned to a designated category before you spend it, leaving no money unaccounted for. You can build one with our zero-based budget planner.',
      es: 'En el presupuesto base cero, los ingresos menos gastos, ahorros y pagos de deudas equivalen exactamente a cero, dando un propósito a cada unidad monetaria.',
      fr: 'Dans un budget base zéro, Revenus − Dépenses − Épargne = 0 €. Chaque euro a un rôle attribué avant le début du mois.',
      de: 'Beim Null-basierten Budget ergibt Einkommen minus Ausgaben und Sparen genau null. Jeder Euro bekommt vorab eine klare Aufgabe.',
      pt: 'No orçamento base zero, Renda − Despesas − Poupança = 0. Cada centavo tem um destino planejado antes do início do mês.',
    },
  },
  {
    id: 'zbb_why_important',
    question: {
      en: 'Why is a zero-based budget important?',
      es: '¿Por qué es importante un presupuesto base cero?',
      fr: 'Pourquoi un budget base zéro est-il important ?',
      de: 'Warum ist ein Null-basiertes Budget wichtig?',
      pt: 'Por que um orçamento base zero é importante?',
    },
    answerHtml: {
      en: 'A zero-based budget is helpful because it clarifies spending intentions and helps reduce untracked cash leaks. When unassigned money sits in a checking account, it can easily drift toward impulse purchases. By giving every dollar an explicit purpose—whether for living costs, emergency savings, or retirement goals—you gain clearer visibility over your cash flow and can make deliberate financial choices.',
      es: 'El presupuesto base cero es valioso porque clarifica las intenciones de gasto y previene las fugas de dinero no registradas. Cuando queda dinero suelto en la cuenta corriente, suele desaparecer en compras impulsivas. Al darle a cada cifra un propósito explícito (gastos corrientes, fondo de emergencia o inversiones), usted recupera el control pleno de su flujo de caja.',
      fr: 'Le budget base zéro est essentiel car il clarifie vos priorités et élimine les fuites d\'argent silencieuses. L\'argent non alloué sur un compte courant tend à disparaître dans des achats impulsifs. En attribuant un objectif explicite à chaque euro (charges, sécurité d\'urgence ou projets futurs), vous maîtrisez parfaitement vos flux financiers.',
      de: 'Ein Null-basiertes Budget ist wichtig, weil es Ausgabenabsichten schärft und unbemerkte Geldlecks stoppt. Nicht zugewiesenes Geld auf dem Girokonto verleitet leicht zu Spontankäufen. Indem jedem Euro ein klarer Zweck zugewiesen wird (Lebenshaltung, Notgroschen oder Vorsorge), treffen Sie bewusste finanzielle Entscheidungen.',
      pt: 'O orçamento base zero é fundamental porque elimina vazamentos invisíveis de dinheiro e gastos impulsivos. Quando sobra dinheiro sem destino na conta corrente, ele tende a sumir em compras pequenas. Ao dar a cada centavo uma missão explícita (custos básicos, reserva ou aposentadoria), você assume o controle deliberado do seu patrimônio.',
    },
    answerText: {
      en: 'A zero-based budget is helpful because it clarifies spending intentions and helps reduce untracked cash leaks. When unassigned money sits in a checking account, it can easily drift toward impulse purchases. By giving every dollar an explicit purpose—whether for living costs, emergency savings, or retirement goals—you gain clearer visibility over your cash flow and can make deliberate financial choices.',
      es: 'El presupuesto base cero clarifica las prioridades y evita que el dinero no asignado se gaste sin control en compras por impulso.',
      fr: 'Ce budget évite que l\'argent laissé au hasard ne disparaisse dans des achats d\'impulsion en lui donnant une destination claire.',
      de: 'Es verhindert, dass freies Geld unbemerkt für Kleinigkeiten ausgegeben wird, indem jedem Euro vorab ein Zweck zugewiesen wird.',
      pt: 'Evita compras por impulso e pequenos desperdícios ao definir um objetivo prévio para cada centavo recebido.',
    },
  },
  {
    id: 'zbb_why_effective',
    question: {
      en: 'Why is zero-based budgeting considered an effective budgeting method?',
      es: '¿Por qué el presupuesto base cero se considera un método eficaz?',
      fr: 'Pourquoi le budget base zéro est-il considéré comme une méthode efficace ?',
      de: 'Warum gilt Null-basiertes Budgetieren als effektive Methode?',
      pt: 'Por que o orçamento base zero é considerado um método eficaz?',
    },
    answerHtml: {
      en: 'Zero-based budgeting is often recommended because it encourages deliberate planning rather than passive tracking. Instead of merely recording expenses after they happen, a zero-based approach prompts proactive trade-offs: when you allocate more to one category, you deliberately adjust funds elsewhere. This approach can be particularly helpful for paying down debt and building consistent savings habits.',
      es: 'Se considera altamente eficaz porque promueve la planificación proactiva en lugar del mero registro pasivo. En vez de limitarse a anotar compras cuando ya ocurrieron, obliga a tomar decisiones conscientes: para aumentar una categoría, hay que recortar otra deliberadamente. Resulta especialmente potente para acelerar el pago de deudas y afianzar hábitos de ahorro.',
      fr: 'Il est reconnu pour son efficacité car il pousse à l\'action préventive plutôt qu\'au simple constat a posteriori. Au lieu d\'enregistrer passivement des dépenses passées, il impose des choix conscients : pour augmenter un poste, il faut ajuster un autre poste. C\'est l\'outil idéal pour désendetter son foyer et épargner régulièrement.',
      de: 'Es gilt als besonders effektiv, weil es aktives Vorausplanen statt passiver Nachverfolgung erfordert. Statt Ausgaben nur im Nachhinein aufzuschreiben, zwingt es zu klaren Entscheidungen: Wer einer Kategorie mehr zuweist, muss an anderer Stelle reduzieren. Das beschleunigt die Schuldentilgung und stärkt Sparroutinen nachhaltig.',
      pt: 'É amplamente elogiado porque substitui o registro passivo de despesas passadas pelo planejamento proativo. Em vez de lamentar gastos já feitos, exige escolhas conscientes: para colocar mais dinheiro em um envelope, é preciso tirar de outro. Isso potencializa a quitação rápida de dívidas e a criação de hábitos de poupança.',
    },
    answerText: {
      en: 'Zero-based budgeting is often recommended because it encourages deliberate planning rather than passive tracking. Instead of merely recording expenses after they happen, a zero-based approach prompts proactive trade-offs: when you allocate more to one category, you deliberately adjust funds elsewhere. This approach can be particularly helpful for paying down debt and building consistent savings habits.',
      es: 'Fomenta la planificación anticipada en lugar del registro posterior, forzando decisiones conscientes sobre dónde destinar los recursos.',
      fr: 'Il incite à planifier en amont plutôt que de subir ses dépenses, favorisant ainsi le désendettement et l\'épargne.',
      de: 'Es fördert aktives Vorausplanen statt passivem Nachverfolgen und hilft optimal beim Schuldenabbau und Sparen.',
      pt: 'Incentiva o planejamento antecipado em vez do controle reativo, acelerando metas de poupança e eliminação de dívidas.',
    },
  },
  {
    id: 'zbb_what_makes',
    question: {
      en: 'What makes a budget a zero-based budget?',
      es: '¿Qué hace que un presupuesto sea base cero?',
      fr: 'Qu\'est-ce qui fait d\'un budget un budget base zéro ?',
      de: 'Was macht ein Budget zu einem Null-basierten Budget?',
      pt: 'O que torna um orçamento em um orçamento base zero?',
    },
    answerHtml: {
      en: 'A budget qualifies as a zero-based budget when every unit of anticipated income is allocated to a specific spending, saving, or debt-payoff bucket so that the unassigned balance is exactly zero. It differs from traditional budgeting because it does not leave a generic "leftover" surplus buffer; instead, any remaining money is deliberately directed into savings cushions, investments, or sinking funds.',
      es: 'Un presupuesto califica como base cero cuando cada unidad de ingreso esperado se asigna a una partida específica de gasto, ahorro o amortización, de modo que el saldo sin asignar sea exactamente cero. Se diferencia de los presupuestos tradicionales en que no deja un excedente vago; cualquier sobrante se destina con intención a fondos de amortización, inversiones o colchones de reserva.',
      fr: 'Un budget est qualifié de base zéro lorsque chaque unité monétaire de revenu prévu est affectée à un poste précis (dépense, épargne ou désendettement), de sorte que le solde non assigné soit rigoureusement égal à zéro. Contrairement aux approches classiques, il n\'y a pas de surplus vague : tout reliquat est délibérément placé dans l\'épargne ou les investissements.',
      de: 'Ein Budget gilt als Null-basiert, wenn jede Geldeinheit des erwarteten Einkommens einem Ausgaben-, Spar- oder Tilgungstopf zugeteilt wird, sodass der nicht zugewiesene Restbetrag exakt null ist. Im Gegensatz zu Standardbudgets gibt es keinen unbestimmten Puffer: Jeder Restbetrag fließt gezielt in Rücklagenfonds oder Sparanlagen.',
      pt: 'Um orçamento se torna base zero quando cada centavo da renda prevista é distribuído em categorias específicas de consumo, investimento ou amortização, deixando o saldo não atribuído rigorosamente zerado. Diferente dos orçamentos comuns, não existe "sobra solta": qualquer excedente é direcionado para reservas ou fundos de amortização.',
    },
    answerText: {
      en: 'A budget qualifies as a zero-based budget when every unit of anticipated income is allocated to a specific spending, saving, or debt-payoff bucket so that the unassigned balance is exactly zero. It differs from traditional budgeting because it does not leave a generic "leftover" surplus buffer; instead, any remaining money is deliberately directed into savings cushions, investments, or sinking funds.',
      es: 'Un presupuesto es base cero cuando cada unidad de ingreso se asigna a una partida específica, dejando el saldo sin asignar exactamente en cero.',
      fr: 'Un budget est base zéro quand l\'intégralité des revenus est affectée à des enveloppes précises jusqu\'à atteindre un solde nul.',
      de: 'Ein Budget ist Null-basiert, wenn alle Einnahmen lückenlos auf Kategorien aufgeteilt werden und der unverteilte Rest null beträgt.',
      pt: 'O orçamento é base zero quando toda a renda é categorizada e o saldo restante não atribuído é rigorosamente zero.',
    },
  },
  {
    id: 'template_google_sheets',
    question: {
      en: 'What is a budget planner template for Google Sheets?',
      es: '¿Qué es una plantilla de presupuesto para Google Sheets?',
      fr: 'Qu\'est-ce qu\'un modèle de budget pour Google Sheets ?',
      de: 'Was ist eine Budgetplaner-Vorlage für Google Sheets?',
      pt: 'O que é um modelo de orçamento para o Google Planilhas?',
    },
    answerHtml: {
      en: 'A budget planner template for Google Sheets is a digital worksheet you can open in cloud spreadsheets to organize personal cash flow. It allows you to enter your income and expenses from any internet-connected device, collaborate with a partner, and adapt the layout to your preferences. You can download free, structured CSV worksheets from our <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">budget planner templates library</a> and import them directly into Google Sheets via File &gt; Import.',
      es: 'Una plantilla de presupuesto para Google Sheets es una hoja de cálculo digital en la nube diseñada para organizar las finanzas personales. Permite ingresar ingresos y gastos desde cualquier dispositivo, colaborar en pareja y personalizar el formato a su gusto. Puede descargar plantillas CSV limpias y gratuitas desde nuestra <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">biblioteca de plantillas de presupuesto</a> e importarlas fácilmente en Google Sheets mediante Archivo &gt; Importar.',
      fr: 'Un modèle pour Google Sheets est une feuille de calcul en ligne permettant d\'organiser ses finances personnelles depuis n\'importe quel appareil connecté, de collaborer à deux et d\'adapter la mise en page à ses besoins. Vous pouvez télécharger gratuitement nos modèles CSV structurés depuis notre <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">catalogue de modèles de budget</a> et les importer dans Google Sheets via Fichier &gt; Importer.',
      de: 'Eine Google Sheets-Vorlage ist eine cloudbasierte Tabelle zur Organisation Ihrer persönlichen Finanzen. Sie ermöglicht den Zugriff von jedem Gerät, die gemeinsame Nutzung mit dem Partner und individuelle Anpassungen. Sie können kostenlose, strukturierte CSV-Dateien aus unserer <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">Vorlagen-Bibliothek</a> herunterladen und direkt über Datei &gt; Importieren öffnen.',
      pt: 'Um modelo para o Google Planilhas é uma planilha na nuvem formatada para organizar o orçamento pessoal. Permite lançar receitas e despesas de qualquer celular ou computador, compartilhar com o parceiro e personalizar categorias. Você pode baixar planilhas CSV gratuitas em nossa <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">galeria de modelos de orçamento</a> e abrir diretamente pelo menu Arquivo &gt; Importar.',
    },
    answerText: {
      en: 'A budget planner template for Google Sheets is a digital worksheet you can open in cloud spreadsheets to organize personal cash flow. It allows you to enter your income and expenses from any internet-connected device, collaborate with a partner, and adapt the layout to your preferences. You can download free, structured CSV worksheets from our budget planner templates library and import them directly into Google Sheets via File > Import.',
      es: 'Es una hoja de cálculo en la nube que permite organizar ingresos y gastos, accesible desde cualquier dispositivo e importable mediante CSV.',
      fr: 'C\'est une feuille de calcul cloud pour gérer ses comptes, accessible partout et compatible avec nos modèles CSV gratuits.',
      de: 'Eine digitale Cloud-Tabelle zum Verwalten von Einnahmen und Ausgaben, die sich einfach per CSV in Google Sheets importieren lässt.',
      pt: 'É uma planilha na nuvem para organizar despesas e receitas em qualquer aparelho, compatível com importação direta de arquivos CSV.',
    },
  },
  {
    id: 'template_what_is',
    question: {
      en: 'What is a budget planner template?',
      es: '¿Qué es una plantilla de planificador de presupuesto?',
      fr: 'Qu\'est-ce qu\'un modèle de planificateur de budget ?',
      de: 'Was ist eine Budgetplaner-Vorlage?',
      pt: 'O que é um modelo de planejador de orçamento?',
    },
    answerHtml: {
      en: 'A budget planner template is a reusable spreadsheet, document, or printable worksheet designed with pre-built columns and categories to organize personal cash flow. Templates streamline the budgeting process by providing ready-to-use structures for income sources, fixed obligations, flexible expenses, and savings goals, saving you from having to construct formulas and layouts from scratch.',
      es: 'Una plantilla de planificador de presupuesto es un formato reutilizable (hoja de cálculo, documento o formato imprimible) estructurado con columnas y categorías listas para usar. Agiliza la gestión financiera al ofrecer esquemas preconfigurados para fuentes de ingresos, compromisos fijos, gastos variables y fondos de ahorro, ahorrándole tener que diseñar fórmulas desde cero.',
      fr: 'Un modèle de planificateur est une grille réutilisable (tableur, document ou formulaire imprimable) organisée avec des colonnes et catégories prêtes à l\'emploi. Il simplifie la gestion financière en fournissant une structure claire pour les revenus, charges fixes, dépenses courantes et épargne, sans avoir à créer de formules à la main.',
      de: 'Eine Budgetplaner-Vorlage ist ein wiederverwendbares Tabellendokument oder Druckblatt mit vorgefertigten Spalten und Kategorien für Ihre Finanzen. Sie erleichtert den Einstieg durch fertige Strukturen für Einkommen, Fixkosten, variable Ausgaben und Sparziele, ohne dass Sie Formeln selbst aufsetzen müssen.',
      pt: 'Um modelo de planejador de orçamento é uma planilha ou documento reutilizável com colunas e categorias pré-formatadas para gerenciar as finanças pessoais. Ele simplifica o processo ao disponibilizar fórmulas prontas para fontes de renda, despesas fixas, variáveis e metas de economia sem necessidade de criar tudo do zero.',
    },
    answerText: {
      en: 'A budget planner template is a reusable spreadsheet, document, or printable worksheet designed with pre-built columns and categories to organize personal cash flow. Templates streamline the budgeting process by providing ready-to-use structures for income sources, fixed obligations, flexible expenses, and savings goals, saving you from having to construct formulas and layouts from scratch.',
      es: 'Una plantilla es un documento o formato reutilizable con categorías y columnas predefinidas para ordenar los ingresos y gastos rápidamente.',
      fr: 'C\'est un document prêt à l\'emploi avec des colonnes et catégories pour structurer ses flux financiers sans créer de formules complexes.',
      de: 'Eine vorgefertigte Tabelle mit Spalten und Formeln, die das Aufstellen von Einnahmen, Ausgaben und Sparzielen vereinfacht.',
      pt: 'É um formato pronto com categorias e fórmulas organizadas para registrar o dinheiro mensal sem complicações.',
    },
  },
  {
    id: 'template_is_free',
    question: {
      en: 'Is there a free budget planner template?',
      es: '¿Hay alguna plantilla de presupuesto gratuita?',
      fr: 'Existe-t-il un modèle de budget gratuit ?',
      de: 'Gibt es eine kostenlose Budgetplaner-Vorlage?',
      pt: 'Existe um modelo gratuito de planejador de orçamento?',
    },
    answerHtml: {
      en: 'Yes. My Real Budget provides free, downloadable budget planner templates in clean CSV formats that import directly into Google Sheets, Microsoft Excel, and Apple Numbers without subscriptions or watermarks. We offer dedicated free worksheets for general monthly budgeting, the 50/30/20 framework, zero-based allocations, college students, and joint household finances on our <a href="/budget-templates/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">budget templates page</a>.',
      es: 'Sí. My Real Budget ofrece plantillas de presupuesto gratuitas en formato CSV limpio que se importan directamente en Google Sheets, Microsoft Excel y Apple Numbers sin suscripciones ni marcas de agua. Ofrecemos hojas dedicadas para presupuesto mensual general, la regla 50/30/20, asignación base cero, estudiantes y finanzas en pareja en nuestra <a href="/budget-templates/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">página de plantillas de presupuesto</a>.',
      fr: 'Oui. My Real Budget fournit des modèles gratuits à télécharger au format CSV universel, compatibles avec Google Sheets, Microsoft Excel et Numbers, sans abonnement ni filigrane. Retrouvez nos feuilles dédiées au budget mensuel, à la règle 50/30/20, au budget base zéro, aux étudiants et aux couples sur notre <a href="/budget-templates/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">page de modèles</a>.',
      de: 'Ja. My Real Budget stellt kostenlose, werbefreie Vorlagen im universellen CSV-Format bereit, die sich nahtlos in Google Sheets, Microsoft Excel und Numbers importieren lassen. Entdecken Sie fertige Vorlagen für Monatsbudgets, 50/30/20, Null-basierte Pläne, Studierende und Paare auf unserer <a href="/budget-templates/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">Vorlagen-Übersicht</a>.',
      pt: 'Sim. O My Real Budget disponibiliza modelos gratuitos em formato CSV limpo, prontos para importação no Google Planilhas, Microsoft Excel e Apple Numbers sem cobranças ou marcas d\'água. Temos opções para orçamento mensal padrão, método 50/30/20, base zero, estudantes e casais na nossa <a href="/budget-templates/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">página de modelos</a>.',
    },
    answerText: {
      en: 'Yes. My Real Budget provides free, downloadable budget planner templates in clean CSV formats that import directly into Google Sheets, Microsoft Excel, and Apple Numbers without subscriptions or watermarks. We offer dedicated free worksheets for general monthly budgeting, the 50/30/20 framework, zero-based allocations, college students, and joint household finances on our budget templates page.',
      es: 'Sí. My Real Budget ofrece plantillas gratuitas descargables en CSV para Excel y Google Sheets sin costos ni registros.',
      fr: 'Oui. My Real Budget met à disposition des modèles CSV gratuits sans abonnement ni frais pour Excel et Google Sheets.',
      de: 'Ja, My Real Budget bietet kostenlose CSV-Vorlagen für Google Sheets und Excel ohne Anmeldung oder Gebühren.',
      pt: 'Sim, o My Real Budget oferece modelos CSV 100% gratuitos para Excel e Google Planilhas, sem assinaturas nem anúncios.',
    },
  },
  {
    id: 'template_best',
    question: {
      en: 'What is the best budget planner template?',
      es: '¿Cuál es la mejor plantilla de planificador de presupuesto?',
      fr: 'Quel est le meilleur modèle de planificateur de budget ?',
      de: 'Was ist die beste Budgetplaner-Vorlage?',
      pt: 'Qual é o melhor modelo de planejador de orçamento?',
    },
    answerHtml: {
      en: 'The best budget planner template is one that matches your recordkeeping habits and preferred budgeting framework. For simple cash flow tracking, a clean monthly income-versus-expense worksheet is ideal. For detailed debt payoff, an organized zero-based worksheet helps ensure every dollar has a clear role. Look for templates with clear category grouping, organized line items, and universal compatibility across Excel and Google Sheets, such as those available in our <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">free template collection</a>.',
      es: 'La mejor plantilla de presupuesto es la que encaja con sus hábitos de registro y el método que prefiere aplicar. Para un seguimiento simple de ingresos y egresos, una hoja mensual básica es ideal. Para salir de deudas de forma intensiva, una plantilla base cero garantiza el destino de cada peso. Busque plantillas con agrupaciones claras y compatibilidad con Excel y Google Sheets, como las disponibles en nuestra <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">colección gratuita</a>.',
      fr: 'Le meilleur modèle est celui qui correspond à votre rythme et à votre méthode favorite. Pour un suivi simple, une feuille revenus/dépenses classique suffit amplement. Pour éliminer ses dettes avec méthode, une feuille base zéro garantit que chaque euro travaille pour vous. Privilégiez des structures claires compatibles Excel et Google Sheets, comme celles de notre <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">collection gratuite</a>.',
      de: 'Die beste Budgetvorlage harmoniert mit Ihren Gewohnheiten und Ihrem bevorzugten System. Für einfachen Überblick genügt eine klare Einnahmen-Ausgaben-Tabelle. Für intensiven Schuldenabbau sorgt eine Null-basierte Vorlage für lückenlose Zuordnung. Wählen Sie gut strukturierte Vorlagen mit voller Google Sheets- und Excel-Kompatibilität aus unserer <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">kostenlosen Sammlung</a>.',
      pt: 'O melhor modelo de planilha é aquele alinhado aos seus hábitos e ao método que você quer praticar. Para acompanhamento básico, uma planilha mensal de entradas e saídas é ideal. Para quitar dívidas com agilidade, o formato base zero garante controle total. Busque modelos organizados e compatíveis com Excel e Google Planilhas, como os da nossa <a href="/budget-planner-template/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">coleção gratuita</a>.',
    },
    answerText: {
      en: 'The best budget planner template is one that matches your recordkeeping habits and preferred budgeting framework. For simple cash flow tracking, a clean monthly income-versus-expense worksheet is ideal. For detailed debt payoff, an organized zero-based worksheet helps ensure every dollar has a clear role. Look for templates with clear category grouping, organized line items, and universal compatibility across Excel and Google Sheets, such as those available in our free template collection.',
      es: 'La mejor plantilla es la que se adapta a su método de planificación y hábitos, con columnas claras y compatibilidad universal.',
      fr: 'Le meilleur modèle dépend de vos objectifs : simple suivi mensuel ou budget base zéro détaillé pour accélérer vos projets.',
      de: 'Die beste Vorlage passt zu Ihrem Alltag, ob einfache Monatsübersicht oder detaillierter Null-basierter Sparplan.',
      pt: 'A melhor planilha é a que acompanha seu ritmo, oferecendo categorias práticas e compatibilidade com Excel e Google Sheets.',
    },
  },
  {
    id: 'how_to_create',
    question: {
      en: 'How do I create a budget planner?',
      es: '¿Cómo creo un planificador de presupuesto?',
      fr: 'Comment créer un planificateur de budget ?',
      de: 'Wie erstelle ich einen Budgetplaner?',
      pt: 'Como criar um planejador de orçamento?',
    },
    answerHtml: {
      en: 'To create a budget planner, gather recent pay stubs and bank statements to determine your reliable net income and average monthly bills. Establish core categories for fixed expenses, variable living costs, savings reserves, and debt payments. Decide on a medium—such as an automated <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">monthly budget planner tool</a> or a spreadsheet template—enter your figures, and normalize varied frequencies like weekly groceries or annual premiums into consistent monthly numbers.',
      es: 'Para crear un planificador de presupuesto, reúna comprobantes de nómina y extractos bancarios recientes para fijar su ingreso neto confiable y gastos fijos habituales. Establezca categorías principales para gastos fijos, consumo diario, ahorro y deudas. Elija su soporte (una <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">herramienta de presupuesto mensual en línea</a> o una plantilla) e ingrese sus números normalizando pagos semanales o anuales a importes mensuales comparables.',
      fr: 'Pour concevoir un planificateur, rassemblez vos fiches de paie et relevés de compte récents afin d\'établir vos revenus nets certains et vos charges moyennes. Créez des rubriques pour les dépenses fixes, les charges courantes, l\'épargne et les crédits. Choisissez votre support (un <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">planificateur en ligne automatisé</a> ou un tableur) et convertissez les paiements hebdomadaires ou annuels en montants mensuels.',
      de: 'Um einen Budgetplaner aufzubauen, sammeln Sie Gehaltsabrechnungen und Kontoauszüge, um Ihr verlässliches Nettoeinkommen und Fixkosten zu ermitteln. Definieren Sie Kernkategorien für Miete, Lebenshaltung, Sparreserven und Verbindlichkeiten. Wählen Sie ein Werkzeug – wie unseren <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">automatisierten Monatsplaner</a> oder eine Vorlage – und rechnen Sie wöchentliche oder jährliche Rechnungen in Monatsbeträge um.',
      pt: 'Para criar seu planejador de orçamento, reúna holerites e extratos bancários recentes para saber sua renda líquida real e os gastos médios do mês. Defina categorias principais para despesas fixas, variáveis, poupança e dívidas. Escolha seu formato favorito — seja uma <a href="/budget-planner/" class="text-[#0e6e55] dark:text-[#10b981] font-medium underline underline-offset-2 hover:opacity-80">ferramenta de orçamento online</a> ou uma planilha — e converta gastos semanais ou anuais em valores mensais proporcionais.',
    },
    answerText: {
      en: 'To create a budget planner, gather recent pay stubs and bank statements to determine your reliable net income and average monthly bills. Establish core categories for fixed expenses, variable living costs, savings reserves, and debt payments. Decide on a medium—such as an automated monthly budget planner tool or a spreadsheet template—enter your figures, and normalize varied frequencies like weekly groceries or annual premiums into consistent monthly numbers.',
      es: 'Reúna nóminas y extractos bancarios, defina categorías para fijos, variables y ahorros, y use una herramienta o plantilla para normalizar importes a base mensual.',
      fr: 'Consultez vos relevés bancaires, classez vos charges par grandes catégories et utilisez un outil ou un tableur pour mensualiser vos flux.',
      de: 'Ermitteln Sie Nettoeinkommen und Fixkosten, gliedern Sie Kategorien und rechnen Sie alle Beträge auf den Monat herunter.',
      pt: 'Analise seus extratos, divida despesas em fixas e variáveis e converta todos os pagamentos em médias mensais equilibradas.',
    },
  },
];

/**
 * Export a translation map containing all FAQ questions and answers
 * for easy integration into the centralized i18n TRANSLATIONS dictionary.
 */
export const HOME_FAQ_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {},
  es: {},
  fr: {},
  de: {},
  pt: {},
  zh: {},
  'zh-hant': {},
};

(['en', 'es', 'fr', 'de', 'pt', 'zh', 'zh-hant'] as const).forEach((lang) => {
  HOME_FAQS.forEach((faq) => {
    if (faq.question[lang]) HOME_FAQ_TRANSLATIONS[lang][`faq.${faq.id}.q`] = faq.question[lang];
    if (faq.answerHtml[lang]) HOME_FAQ_TRANSLATIONS[lang][`faq.${faq.id}.a`] = faq.answerHtml[lang];
  });
});
