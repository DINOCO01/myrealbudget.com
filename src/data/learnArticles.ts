export interface LocalizedString {
  en: string;
  es: string;
  fr: string;
  de: string;
  pt: string;
  zh: string;
}

export interface LearnArticleDef {
  slug: string;
  title: LocalizedString;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  readTime: LocalizedString;
  category: LocalizedString;
  summary: LocalizedString;
  relatedSlugs: string[];
}

export const LEARN_ARTICLES: LearnArticleDef[] = [
  {
    slug: 'what-is-a-budget',
    title: {
      en: 'What Is a Budget? The Real Purpose of Managing Your Cash Flow',
      es: '¿Qué es un Presupuesto? El Verdadero Propósito de Gestionar su Flujo de Caja',
      fr: 'Qu\'est-ce qu\'un Budget ? Le Vrai Rôle de la Gestion de Trésorerie',
      de: 'Was ist ein Budget? Der wahre Zweck Ihrer Cashflow-Planung',
      pt: 'O que é um Orçamento? O Verdadeiro Propósito de Gerenciar seu Fluxo de Caixa',
      zh: '什么是预算？管理现金流的真实意义',
    },
    metaTitle: {
      en: 'What Is a Budget? Simple Guide & Practical Benefits | My Real Budget',
      es: '¿Qué es un Presupuesto? Guía Sencilla y Beneficios Prácticos | My Real Budget',
      fr: 'Qu\'est-ce qu\'un Budget ? Guide Pratique et Avantages | My Real Budget',
      de: 'Was ist ein Budget? Praktischer Leitfaden & Vorteile | My Real Budget',
      pt: 'O que é um Orçamento? Guia Prático e Benefícios Reais | My Real Budget',
      zh: '什么是预算？管理现金流的实用指南与核心优势 | My Real Budget',
    },
    metaDescription: {
      en: 'Understand what a budget really is, why most traditional diets fail, and how a realistic cash flow plan provides financial freedom rather than restriction.',
      es: 'Descubra qué es realmente un presupuesto, por qué fallan las dietas financieras restrictivas y cómo un plan de flujo de caja genera libertad.',
      fr: 'Comprenez ce qu\'est un vrai budget, pourquoi les régimes stricts échouent et comment un plan de trésorerie apporte la liberté financière.',
      de: 'Verstehen Sie, was ein Budget wirklich bedeutet, warum strenge Verbote scheitern und wie ein realistischer Cashflow-Plan finanzielle Freiheit schenkt.',
      pt: 'Entenda o que é um orçamento de verdade, por que dietas financeiras restritivas falham e como um plano realista traz liberdade.',
      zh: '深入了解预算的本质，为什么极端的节流计划总会失败，以及合理的现金流规划如何带来财务安心与消费自由。',
    },
    readTime: {
      en: '4 min read',
      es: '4 min de lectura',
      fr: '4 min de lecture',
      de: '4 Min. Lesezeit',
      pt: '4 min de leitura',
      zh: '4 分钟阅读',
    },
    category: {
      en: 'Budgeting Fundamentals',
      es: 'Fundamentos de Presupuesto',
      fr: 'Fondamentaux du Budget',
      de: 'Budget-Grundlagen',
      pt: 'Fundamentos do Orçamento',
      zh: '预算基础',
    },
    summary: {
      en: 'A budget is not a punishment or a restrictive diet. It is simply an intentional plan for where your money goes before the month begins.',
      es: 'Un presupuesto no es un castigo ni una dieta restrictiva. Es simplemente un plan intencional para decidir el destino de su dinero antes de empezar el mes.',
      fr: 'Un budget n\'est ni une punition ni une privation. C\'est simplement un plan conscient pour guider votre argent avant le début du mois.',
      de: 'Ein Budget ist keine Bestrafung oder strenge Diät. Es ist einfach ein bewusster Plan, der festlegt, wohin Ihr Geld fließt, bevor der Monat beginnt.',
      pt: 'Um orçamento não é punição nem sacrifício extremo. É simplesmente um plano intencional para onde seu dinheiro vai antes do mês começar.',
      zh: '预算不是惩罚或痛苦的节流。它只是一份在月初主动规划资金去向的明确路线图。',
    },
    relatedSlugs: ['how-to-create-a-monthly-budget', '50-30-20-budget-explained'],
  },
  {
    slug: 'how-to-create-a-monthly-budget',
    title: {
      en: 'How to Create a Monthly Budget: Step-by-Step Guide for Real Life',
      es: 'Cómo Crear un Presupuesto Mensual: Guía Paso a Paso para la Vida Real',
      fr: 'Comment Créer un Budget Mensuel : Guide Pratique Étape par Étape',
      de: 'Monatsbudget erstellen: Schritt-für-Schritt-Anleitung für den Alltag',
      pt: 'Como Criar um Orçamento Mensal: Guia Passo a Passo para a Vida Real',
      zh: '如何制定月度预算：适合日常生活的实操指南',
    },
    metaTitle: {
      en: 'How to Create a Monthly Budget Step-by-Step | My Real Budget',
      es: 'Cómo Crear un Presupuesto Mensual Paso a Paso | My Real Budget',
      fr: 'Comment Créer un Budget Mensuel Pas à Pas | My Real Budget',
      de: 'Monatsbudget Schritt für Schritt erstellen | My Real Budget',
      pt: 'Como Criar um Orçamento Mensal Passo a Passo | My Real Budget',
      zh: '如何制定月度预算：简易5步实操指南 | My Real Budget',
    },
    metaDescription: {
      en: 'Learn how to build a monthly budget that actually balances. Step-by-step guidance on calculating net income, listing fixed and variable expenses, and normalizing payment frequencies.',
      es: 'Aprenda a crear un presupuesto mensual que realmente cuadre. Guía paso a paso sobre ingresos netos, gastos fijos y variables, y normalización de frecuencias.',
      fr: 'Apprenez à construire un budget mensuel qui s\'équilibre vraiment. Guide étape par étape pour calculer vos revenus nets, lister charges et normaliser vos dépenses.',
      de: 'Erfahren Sie, wie Sie ein Monatsbudget aufstellen, das wirklich aufgeht. Anleitung zu Nettoeinkommen, Fixkosten, variablen Ausgaben und Zahlungsintervallen.',
      pt: 'Aprenda a construir um orçamento mensal equilibrado. Guia com renda líquida, custos fixos e variáveis, e normalização de frequências.',
      zh: '学习如何制定收支真正平衡的月度预算。包含计算税后净收入、列出固定与弹性支出，以及折算不同支付周期。',
    },
    readTime: {
      en: '6 min read',
      es: '6 min de lectura',
      fr: '6 min de lecture',
      de: '6 Min. Lesezeit',
      pt: '6 min de leitura',
      zh: '6 分钟阅读',
    },
    category: {
      en: 'Guides & Walkthroughs',
      es: 'Guías y Tutoriales',
      fr: 'Guides & Tutoriels',
      de: 'Praxis-Leitfäden',
      pt: 'Guias e Tutoriais',
      zh: '实操指南',
    },
    summary: {
      en: 'Discover the exact process for gathering your numbers, normalizing irregular payments, and creating a working budget you can stick with.',
      es: 'Descubra el proceso exacto para organizar sus números, normalizar gastos irregulares y crear un presupuesto realista y sostenible.',
      fr: 'Découvrez la méthode exacte pour rassembler vos chiffres, lisser les dépenses irrégulières et créer un budget réaliste et durable.',
      de: 'Entdecken Sie den genauen Ablauf, um Ihre Zahlen zu ordnen, unregelmäßige Zahlungen umzurechnen und ein alltagstaugliches Budget zu führen.',
      pt: 'Descubra o passo a passo exato para reunir seus dados, normalizar gastos irregulares e manter um orçamento sustentável no dia a dia.',
      zh: '掌握整理收支数据、将不规则账单折算为月度开销并建立长效预算习惯的完整步骤。',
    },
    relatedSlugs: ['what-is-a-budget', '50-30-20-vs-zero-based-budget'],
  },
  {
    slug: '50-30-20-budget-explained',
    title: {
      en: '50/30/20 Budget Explained: Needs, Wants, and Savings Targets',
      es: 'La Regla 50/30/20 Explicada: Necesidades, Deseos y Metas de Ahorro',
      fr: 'La Règle 50/30/20 Expliquée : Besoins, Envies et Objectifs d\'Épargne',
      de: '50/30/20-Regel erklärt: Grundbedarf, Wünsche und Sparziele',
      pt: 'Regra 50/30/20 Explicada: Necessidades, Desejos e Metas de Economia',
      zh: '50/30/20预算解析：必要开支、弹性支出与储蓄目标',
    },
    metaTitle: {
      en: '50/30/20 Budget Explained: Rule, Formula & Real Examples | My Real Budget',
      es: 'Regla 50/30/20 Explicada: Fórmula, Ejemplos Reales | My Real Budget',
      fr: 'Règle 50/30/20 Expliquée : Formule, Exemples Réels | My Real Budget',
      de: '50/30/20-Budget erklärt: Regel, Formel & Beispiele | My Real Budget',
      pt: 'Regra 50/30/20 Explicada: Fórmula, Exemplos Práticos | My Real Budget',
      zh: '50/30/20预算解析：规则解析、计算公式与实用技巧 | My Real Budget',
    },
    metaDescription: {
      en: 'A complete breakdown of the 50/30/20 budgeting rule. Understand what counts as a Need vs Want, calculate your numbers, and adapt the framework to high-cost-of-living realities.',
      es: 'Análisis detallado de la regla 50/30/20. Entienda la diferencia entre necesidad y deseo, calcule sus números y adáptela al costo de vida real.',
      fr: 'Décryptage complet de la règle 50/30/20. Comprenez la différence entre besoins et envies, calculez vos montants et adaptez le modèle au coût de la vie.',
      de: 'Vollständige Übersicht zur 50/30/20-Regel. Was zählt als Grundbedarf oder Wunsch? Berechnen Sie Ihre Werte und passen Sie sie an hohe Wohnkosten an.',
      pt: 'Guia completo da regra 50/30/20. Diferencie necessidades de desejos, calcule seus limites e adapte a metodologia ao custo de vida real.',
      zh: '全面剖析50/30/20预算规则：科学区分必要与弹性开支，计算个人目标金额，并根据实际生活成本进行灵活变通。',
    },
    readTime: {
      en: '5 min read',
      es: '5 min de lectura',
      fr: '5 min de lecture',
      de: '5 Min. Lesezeit',
      pt: '5 min de leitura',
      zh: '5 分钟阅读',
    },
    category: {
      en: 'Budgeting Methods',
      es: 'Métodos de Presupuesto',
      fr: 'Méthodes de Budget',
      de: 'Budgetierungsmethoden',
      pt: 'Métodos de Orçamento',
      zh: '预算方法',
    },
    summary: {
      en: 'Master Senator Elizabeth Warren’s renowned framework dividing net income into 50% essential needs, 30% personal wants, and 20% savings & debt.',
      es: 'Domine el célebre marco que divide los ingresos netos en 50% necesidades esenciales, 30% deseos personales y 20% ahorro y deudas.',
      fr: 'Maîtrisez le modèle réputé qui alloue 50 % aux nécessités de base, 30 % aux plaisirs personnels et 20 % à l\'épargne et au désendettement.',
      de: 'Nutzen Sie das bewährte Rahmenwerk: 50 % für existenzielle Grundkosten, 30 % für persönliche Wünsche und 20 % für Sparen & Tilgung.',
      pt: 'Domine a consagrada metodologia que divide o salário líquido em 50% necessidades, 30% desejos pessoais e 20% poupança e dívidas.',
      zh: '掌握经典的比例分配预算体系：将税后收入划分为50%必要支出、30%个人品质生活和20%储蓄投资。',
    },
    relatedSlugs: ['50-30-20-vs-zero-based-budget', 'zero-based-budget-explained'],
  },
  {
    slug: 'zero-based-budget-explained',
    title: {
      en: 'Zero-Based Budget Explained: How to Give Every Dollar a Job',
      es: 'Presupuesto Base Cero Explicado: Cómo Darle una Misión a Cada Moneda',
      fr: 'Budget Base Zéro Expliqué : Donner un Rôle à Chaque Euro',
      de: 'Null-basiertes Budget erklärt: Jedem Euro eine feste Aufgabe geben',
      pt: 'Orçamento Base Zero Explicado: Como Dar um Destino a Cada Centavo',
      zh: '零基预算完全指南：如何做到每一分钱都有明确用途',
    },
    metaTitle: {
      en: 'Zero-Based Budget Explained: Meaning, Steps & Examples | My Real Budget',
      es: 'Presupuesto Base Cero Explicado: Pasos y Ejemplos | My Real Budget',
      fr: 'Budget Base Zéro Expliqué : Étapes et Exemples | My Real Budget',
      de: 'Null-basiertes Budget erklärt: Schritte & Beispiele | My Real Budget',
      pt: 'Orçamento Base Zero Explicado: Passos e Exemplos | My Real Budget',
      zh: '零基预算完全指南：核心概念、执行步骤与实用案例 | My Real Budget',
    },
    metaDescription: {
      en: 'Explore zero-based budgeting (ZBB). Discover how assigning every dollar a specific purpose helps reduce financial leaks and accelerates debt payoff and savings.',
      es: 'Explore el presupuesto base cero (ZBB). Descubra cómo asignar a cada peso un fin específico reduce fugas de dinero y acelera el ahorro.',
      fr: 'Découvrez le budget base zéro. Attribuer une mission précise à chaque euro élimine les dépenses superflues et accélère le désendettement.',
      de: 'Null-basiertes Budgetieren im Detail: Erfahren Sie, wie eine lückenlose Zuweisung aller Einnahmen Geldverschwendung stoppt und das Sparen fördert.',
      pt: 'Conheça o orçamento base zero. Veja como dar um papel específico a cada centavo estanca desperdícios e acelera a quitação de dívidas.',
      zh: '深入了解零基预算方法（ZBB）。为每笔收入指定用途，消除财务漏洞，加速还清债务与储蓄积累。',
    },
    readTime: {
      en: '5 min read',
      es: '5 min de lectura',
      fr: '5 min de lecture',
      de: '5 Min. Lesezeit',
      pt: '5 min de leitura',
      zh: '5 分钟阅读',
    },
    category: {
      en: 'Budgeting Methods',
      es: 'Métodos de Presupuesto',
      fr: 'Méthodes de Budget',
      de: 'Budgetierungsmethoden',
      pt: 'Métodos de Orçamento',
      zh: '预算方法',
    },
    summary: {
      en: 'Learn how Income minus Outflow equals Zero creates intentional clarity for debt reduction and savings goals.',
      es: 'Comprenda cómo la fórmula Ingresos menos Salidas igual a Cero crea claridad absoluta para liquidar deudas y cumplir metas de ahorro.',
      fr: 'Voyez comment la formule Revenus moins Dépenses égal Zéro apporte une clarté totale pour épargner et rembourser ses dettes.',
      de: 'Erfahren Sie, wie die Formel Einnahmen minus Gesamtausgaben gleich Null maximale Klarheit für Ihre Ersparnisse und Tilgungsziele schafft.',
      pt: 'Entenda como a equação Renda menos Despesas igual a Zero traz foco para liquidar dívidas e alcançar metas de poupança.',
      zh: '理解“收入减支出等于零”的预算逻辑，获得精细掌控现金流的确定感，加速达成还债与财富积累目标。',
    },
    relatedSlugs: ['50-30-20-vs-zero-based-budget', 'how-to-create-a-monthly-budget'],
  },
  {
    slug: '50-30-20-vs-zero-based-budget',
    title: {
      en: '50/30/20 vs Zero-Based Budget: Which Method Is Right for You?',
      es: '50/30/20 vs Presupuesto Base Cero: ¿Cuál es el Método Adecuado para Usted?',
      fr: '50/30/20 vs Budget Base Zéro : Quelle Méthode Choisir pour Vous ?',
      de: '50/30/20 vs. Null-basiertes Budget: Welche Methode passt zu Ihnen?',
      pt: '50/30/20 vs Orçamento Base Zero: Qual Método é Melhor para Você?',
      zh: '50/30/20预算 vs 零基预算：哪种方法更适合您的生活？',
    },
    metaTitle: {
      en: '50/30/20 vs Zero-Based Budget: Comparison & Which to Choose | My Real Budget',
      es: '50/30/20 vs Presupuesto Base Cero: Comparativa y Elección | My Real Budget',
      fr: '50/30/20 vs Budget Base Zéro : Comparatif et Choix | My Real Budget',
      de: '50/30/20 vs. Null-basiertes Budget im Vergleich | My Real Budget',
      pt: '50/30/20 vs Orçamento Base Zero: Comparativo Completo | My Real Budget',
      zh: '50/30/20与零基预算对比：选择最适合您的策略 | My Real Budget',
    },
    metaDescription: {
      en: 'Compare the 50/30/20 rule and Zero-Based budgeting head-to-head. Compare flexibility, daily effort, mindset, and discover which method fits your lifestyle.',
      es: 'Compare la regla 50/30/20 y el presupuesto base cero cara a cara. Analice flexibilidad, esfuerzo diario y descubra cuál se adapta a su estilo.',
      fr: 'Comparez la règle 50/30/20 et le budget base zéro : flexibilité, charge mentale et méthode adaptée à votre quotidien.',
      de: '50/30/20 und Null-basiertes Budget im direkten Vergleich: Flexibilität, Zeitaufwand und welche Philosophie am besten zu Ihrem Lebensstil passt.',
      pt: 'Compare a regra 50/30/20 com o orçamento base zero: flexibilidade, rotina diária e qual método combina mais com o seu perfil.',
      zh: '面对面客观对比50/30/20法则与零基预算：考量日常维护精力、灵活性与金钱心理，挑选契合您生活习惯的预算模式。',
    },
    readTime: {
      en: '6 min read',
      es: '6 min de lectura',
      fr: '6 min de lecture',
      de: '6 Min. Lesezeit',
      pt: '6 min de leitura',
      zh: '6 分钟阅读',
    },
    category: {
      en: 'Comparisons',
      es: 'Comparativas',
      fr: 'Comparatifs',
      de: 'Methodenvergleich',
      pt: 'Comparações',
      zh: '方法对比',
    },
    summary: {
      en: 'An honest comparison of the two most popular modern budgeting frameworks so you can choose the strategy that fits your psychological style.',
      es: 'Una comparativa honesta entre los dos sistemas de presupuesto más populares para elegir la estrategia afín a su personalidad.',
      fr: 'Une comparaison détaillée des deux méthodes budgétaires les plus réputées pour trouver celle qui correspond à votre tempérament.',
      de: 'Ein ehrlicher Vergleich der beiden führenden Budgetansätze, damit Sie die Strategie wählen, die optimal zu Ihnen passt.',
      pt: 'Uma análise comparativa sincera entre as duas metodologias mais populares para você escolher a que melhor se adapta à sua rotina.',
      zh: '两大主流现代预算框架的客观对比，帮助您依据自身的心理偏好与生活节奏选择最契合的策略。',
    },
    relatedSlugs: ['50-30-20-budget-explained', 'zero-based-budget-explained'],
  },
];

/**
 * Export translation map containing all Learn article card metadata
 * for integration into i18n TRANSLATIONS.
 */
export const LEARN_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {},
  es: {},
  fr: {},
  de: {},
  pt: {},
  zh: {},
};

(['en', 'es', 'fr', 'de', 'pt', 'zh'] as const).forEach((lang) => {
  LEARN_ARTICLES.forEach((article) => {
    LEARN_TRANSLATIONS[lang][`learn.${article.slug}.title`] = article.title[lang];
    LEARN_TRANSLATIONS[lang][`learn.${article.slug}.summary`] = article.summary[lang];
    LEARN_TRANSLATIONS[lang][`learn.${article.slug}.category`] = article.category[lang];
    LEARN_TRANSLATIONS[lang][`learn.${article.slug}.read_time`] = article.readTime[lang];
  });
});
