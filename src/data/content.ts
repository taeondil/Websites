import { ContentItem } from '../types/content';

export const contentItems: ContentItem[] = [
  {
    id: 'reading-1',
    title: "The Impact of Climate Change on Global Water Resources",
    level: 'B1',
    duration: '514 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1570358934836-6802981e481e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
        A. Water is an essential element for life on Earth, covering about 71% of the planet's surface. It has been a driving force behind the development of civilizations, providing not only sustenance but also serving as a medium for transportation and trade. However, water's dual nature as both a life-giver and a life-taker has become increasingly evident in recent years.

B. Historically, human settlements have flourished near water sources, such as rivers, lakes, and coastlines. These locations provided access to drinking water, fertile land for agriculture, and routes for trade and exploration. However, this proximity has also exposed communities to the dangers of flooding, droughts, and other water-related disasters. As climate change accelerates, the relationship between humans and water is becoming more complex and, at times, more destructive.

C. Climate change has led to more frequent and severe weather events, including hurricanes, floods, and prolonged droughts. These events have devastating effects on both human populations and the environment. For example, rising sea levels threaten coastal cities, while desertification transforms once-fertile lands into barren wastelands. The unpredictability of these changes has made it difficult for communities to adapt and thrive.

D. One of the most significant challenges posed by climate change is the disruption of global water cycles. Warmer temperatures increase the rate of evaporation, leading to more intense rainfall in some areas and prolonged droughts in others. This imbalance has far-reaching consequences, affecting agriculture, ecosystems, and the availability of fresh water for human consumption.

E. In 2010, Pakistan experienced one of the worst floods in its history, affecting over 20 million people and causing billions of dollars in damage. The floodwaters destroyed homes, crops, and infrastructure, leaving millions without access to clean water or food. Similarly, in 2019, Cyclone Idai devastated parts of Mozambique, Zimbabwe, and Malawi, displacing thousands and causing widespread destruction.

F. Efforts to mitigate the impact of climate change on water resources include the construction of flood defenses, reforestation, and the promotion of sustainable water management practices. For example, planting trees in upland areas can help reduce the risk of flooding by absorbing excess rainwater and stabilizing soil. Additionally, reducing greenhouse gas emissions is crucial to slowing the pace of climate change and its effects on water systems.

G. Looking to the future, experts predict that water scarcity will become a major global issue. By 2040, it is estimated that nearly 40% of the world's population will face severe water stress. This scarcity could lead to conflicts over water resources, as seen in regions like the Middle East, where access to water is already a contentious issue. The competition for water is likely to intensify as populations grow and climate change exacerbates existing challenges.

H. Despite these grim predictions, there is hope. Advances in technology and science offer potential solutions, such as desalination, water recycling, and improved irrigation techniques. International cooperation and policy changes are also essential to ensure that water resources are managed sustainably and equitably. The challenge is immense, but with concerted effort, it is possible to secure a future where water remains a source of life rather than conflict.
`,
    exercises: [
      {
        id: 'r1-mc-1',
        type: 'multiple-choice',
        question: 'According to Paragraph A, what might be the reason water is described as both a "life-giver and a life-taker"?',
        options: [
          'Water covers a large portion of the Earth\'s surface.',
          'Water has played both positive and negative roles in human evolution.',
          'Water is only used for agriculture.',
          'Water can completely stop climate change.'
        ],
        answer: 'Water has played both positive and negative roles in human evolution.'
      },
      {
        id: 'r1-mc-2',
        type: 'multiple-choice',
        question: 'In Paragraph B, what does the author imply by describing the relationship between humanity and water as "thorny"?',
        options: [
          'Water has only been beneficial to humans.',
          'Water carries both benefits and risks for humanity.',
          'Water has never been dangerous to humans.',
          'Water is only used for trade purposes.'
        ],
        answer: 'Water carries both benefits and risks for humanity.'
      },
      {
        id: 'r1-mc-3',
        type: 'multiple-choice',
        question: 'Based on Paragraph C, what is the author\'s main message about the effects of climate change?',
        options: [
          'Climate change is only a modern-day issue.',
          'Climate change has increased humanity\'s awe of natural forces.',
          'Climate change has historically made survival more challenging for humans.',
          'Climate change only affects agricultural lands.'
        ],
        answer: 'Climate change has historically made survival more challenging for humans.'
      },
      {
        id: 'r1-mc-4',
        type: 'multiple-choice',
        question: 'In Paragraph F, what is the author\'s attitude toward the solution of "tree planting"?',
        options: [
          'The author believes it is a costly and ineffective solution.',
          'The author sees it as a practical and sustainable approach.',
          'The author thinks it is irrelevant to flood prevention.',
          'The author considers it a temporary fix with no long-term benefits.'
        ],
        answer: 'The author sees it as a practical and sustainable approach.'
      },
      {
        id: 'r1-mc-5',
        type: 'multiple-choice',
        question: 'What can be inferred from Paragraph G about the future of water resources?',
        options: [
          'Water scarcity will only affect developing countries.',
          'Competition over water will likely lead to global conflicts.',
          'Technological advancements will completely solve water scarcity.',
          'Water will become less important than oil by 2040.'
        ],
        answer: 'Competition over water will likely lead to global conflicts.'
      },
      {
        id: 'r1-mc-6',
        type: 'multiple-choice',
        question: 'In Paragraph H, what does the author suggest about the impact of melting polar ice caps?',
        options: [
          'Coastal regions will benefit from increased tourism.',
          'Low-lying islands and coastal areas will face significant threats.',
          'Polar ice caps have no connection to climate change.',
          'The melting of ice caps will have no impact on human settlements.'
        ],
        answer: 'Low-lying islands and coastal areas will face significant threats.'
      },
      {
        id: 'r1-mc-7',
        type: 'multiple-choice',
        question: 'What is the author\'s overall tone in the passage?',
        options: [
          'Optimistic and dismissive of climate change.',
          'Concerned and urgent about the future of water resources.',
          'Indifferent and uninterested in environmental issues.',
          'Humorous and lighthearted about natural disasters.'
        ],
        answer: 'Concerned and urgent about the future of water resources.'
      },
      {
        id: 'r1-tf-1',
        type: 'true-false',
        question: 'Water has only been beneficial to human civilizations throughout history. (Paragraph B)',
        answer: false
      },
      {
        id: 'r1-tf-2',
        type: 'true-false',
        question: 'The 2019 Cyclone Idai affected Mozambique, Zimbabwe, and Malawi. (Paragraph E)',
        answer: true
      },
      {
        id: 'r1-tf-3',
        type: 'true-false',
        question: 'Reducing greenhouse gas emissions has no impact on water systems. (Paragraph F)',
        answer: false
      },
      {
        id: 'r1-tf-4',
        type: 'true-false',
        question: 'Advances in technology offer no solutions to water scarcity. (Paragraph H)',
        answer: false
      },
      {
        id: 'r1-fb-1',
        type: 'fill-blanks',
        question: 'Water covers about ________% of the Earth\'s surface.',
        answer: '71'
      },
      {
        id: 'r1-fb-2',
        type: 'fill-blanks',
        question: 'The 2010 floods in Pakistan affected over ________ million people.',
        answer: '20'
      },
      {
        id: 'r1-fb-3',
        type: 'fill-blanks',
        question: 'Planting trees in upland areas can help reduce the risk of ________.',
        answer: 'flooding'
      },
      {
        id: 'r1-fb-4',
        type: 'fill-blanks',
        question: 'By 2040, nearly ________% of the world\'s population will face severe water stress.',
        answer: '40'
      },
    ]
  },
  
  {
    id: 'reading-2',
    title: "The Industrial Revolution and Its Global Impact",
    level: 'B1+',
    duration: '365 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
        A. The Industrial Revolution, spanning the late 18th to early 19th centuries, marked a turning point in human history. Originating in Britain, it transformed societies from agrarian economies to industrialized powerhouses. Innovations like the steam engine, mechanized textile production, and railways redefined labor, urbanization, and global trade. However, this progress came at a cost: environmental degradation, exploitative labor practices, and stark social inequalities.  

B. Urbanization accelerated as people migrated from rural areas to cities in search of factory work. Cities like Manchester and Birmingham grew rapidly, but overcrowding, poor sanitation, and inadequate housing led to public health crises. Cholera outbreaks and respiratory diseases became commonplace, highlighting the human toll of unchecked industrialization.  

C. Technological advancements were double-edged swords. James Watt’s steam engine (1775) revolutionized manufacturing and transportation but also displaced skilled artisans. The Luddite movement, which opposed machinery threatening traditional livelihoods, exemplified the tension between progress and preservation. Meanwhile, child labor in factories and mines exposed societal moral failings.  

D. The Revolution’s impact extended beyond Europe. Colonized regions supplied raw materials like cotton and rubber, fueling European factories while being exploited economically. India’s handloom weavers, for instance, were decimated by British mass-produced textiles. This economic imbalance entrenched global inequalities that persist today.  

E. Environmental consequences were equally profound. Coal-powered industries polluted air and water, while deforestation and soil depletion altered landscapes. The Great Smog of London (1952), though later, was a legacy of industrialization’s environmental disregard. Critics argue that the Industrial Revolution set the stage for today’s climate crisis.  

F. Social reforms emerged gradually. Labor unions, factory acts (e.g., the 1833 Factory Act in Britain), and movements for workers’ rights sought to mitigate exploitation. Yet, progress was slow and uneven. Women and children, often paid less than men, remained vulnerable despite legislative efforts.  

G. The Revolution’s legacy is debated. While it spurred technological progress and higher living standards for some, it also entrenched systemic inequalities and ecological harm. Modern parallels, such as automation and AI, echo its dual nature—opportunity versus displacement.  

H. Today, historians emphasize that industrialization was not inevitable but shaped by political choices and colonial exploitation. Understanding this complexity is crucial as societies navigate contemporary challenges like sustainable development and equitable globalization.
`,
    exercises: [
      {
        id: 'r2-mc-1',
        type: 'multiple-choice',
        question: 'What does the author imply by calling technological advancements "double-edged swords" (Paragraph C)?',
        options: [
          'They only benefited factory owners.',
          'They had no environmental impact',
          'They were irrelevant to the working class.',
          'They created both progress and societal challenges.'
        ],
        answer: 'They created both progress and societal challenges.'
      },
      {
        id: 'r2-mc-2',
        type: 'multiple-choice',
        question: 'In Paragraph D, why does the author mention India’s handloom weavers?',
        options: [
          'To illustrate the global exploitation underpinning industrialization.',
          'To highlight their technological superiority.',
          'To criticize British labor laws.',
          'To emphasize India’s economic independence.'
        ],
        answer: 'To illustrate the global exploitation underpinning industrialization.'
      },
      {
        id: 'r2-mc-3',
        type: 'multiple-choice',
        question: 'What is the author’s attitude toward the Luddite movement (Paragraph C)?',
        options: [
          'Dismissive, seeing them as anti-progress.',
          'Admiring, praising their technological innovation.',
          'Neutral, with no clear stance.',
          'Sympathetic, acknowledging their resistance to displacement.'
        ],
        answer: 'Sympathetic, acknowledging their resistance to displacement.'
      },
      {
        id: 'r2-mc-4',
        type: 'multiple-choice',
        question: 'Based on Paragraph G, what modern issue mirrors the Industrial Revolution’s duality?',
        options: [
          'Space exploration.',
          'Automation and AI.',
          'Organic farming.',
          'Digital entertainment.'
        ],
        answer: 'Automation and AI.'
      },
      {
        id: 'r2-mc-5',
        type: 'multiple-choice',
        question: 'What does Paragraph H suggest about industrialization?',
        options: [
          'It was an inevitable natural process.',
          'It was driven solely by technological innovation.',
          'It was shaped by political and colonial decisions.',
          'It had no connection to modern sustainability issues.'
        ],
        answer: 'It was shaped by political and colonial decisions.'
      },
      {
        id: 'r2-mc-6',
        type: 'multiple-choice',
        question: 'What is the main purpose of Paragraph E?',
        options: [
          'To praise the environmental benefits of coal.',
          'To link industrialization to long-term ecological harm.',
          'To argue that pollution was a minor issue.',
          'To compare 18th-century and modern factories.'
        ],
        answer: 'To link industrialization to long-term ecological harm.'
      },
      
      {
        id: 'r2-tf-1',
        type: 'true-false',
        question: 'The Industrial Revolution began in France. (Paragraph A)',
        answer: false
      },
      {
        id: 'r2-tf-2',
        type: 'true-false',
        question: 'Child labor was uncommon during the Industrial Revolution. (Paragraph C)',
        answer: false
      },
      {
        id: 'r2-tf-3',
        type: 'true-false',
        question: 'The 1833 Factory Act immediately resolved labor exploitation. (Paragraph F)',
        answer: false
      },
      {
        id: 'r2-tf-4',
        type: 'true-false',
        question: 'Historians today believe industrialization was an unavoidable process. (Paragraph H)',
        answer: false
      },
      {
        id: 'r2-fb-1',
        type: 'fill-blanks',
        question: 'The Industrial Revolution began in the late _______ century. (Paragraph A)',
        answer: '18th'
      },
      {
        id: 'r2-fb-2',
        type: 'fill-blanks',
        question: 'James Watt improved the _______ engine in 1775. (Paragraph C)',
        answer: 'steam'
      },
      {
        id: 'r2-fb-3',
        type: 'fill-blanks',
        question: 'The _______ movement opposed machinery threatening traditional jobs. (Paragraph C)',
        answer: 'Luddite'
      },
      {
        id: 'r2-fb-4',
        type: 'fill-blanks',
        question: 'The Great Smog of London occurred in _______. (Paragraph E)',
        answer: '1952'
      },
      {
        id: 'r2-fb-5',
        type: 'fill-blanks',
        question: 'The 1833 Factory Act aimed to regulate _______ labor. (Paragraph F)',
        answer: 'child'
      },
    ]
  },
  {
    id: 'reading-3',
    title: "The Hidden Crisis in Our Oceans: Microplastics and the Silent Threat to Marine Life",
    level: 'B2',
    duration: '400 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1542031047-fa05266f220a?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
        Beneath the shimmering surface of the world’s oceans lies an invisible crisis: microplastics—tiny plastic particles smaller than a sesame seed—now permeate every level of the marine food chain, from sunlit surface waters to the crushing depths of the Mariana Trench. A 2024 study published in Nature revealed that over 90% of marine species tested, including plankton, fish, seabirds, and even blue whales, ingest these particles, which leach toxic chemicals like phthalates and bisphenol A, disrupting reproductive systems, weakening immune responses, and causing fatal intestinal blockages. Researchers trace the problem to the staggering 14 million tons of plastic entering oceans annually, much of it single-use packaging, synthetic textiles, and abandoned fishing gear that breaks down into trillions of indestructible fragments, persisting for centuries and hitchhiking on ocean currents to form sprawling garbage patches like the Great Pacific Garbage Patch, now twice the size of Texas. Coastal communities are already bearing the brunt: in Indonesia, fishermen report catches dwindling by 40% as coral reefs suffocate under layers of plastic waste, while in the Mediterranean, microplastics have infiltrated 80% of commercial fish species, raising alarms about carcinogens entering human diets. Dr. Emily Carter, a marine biologist at Scripps Institution of Oceanography, warns, “We’re witnessing a slow-motion catastrophe—these particles aren’t just harming wildlife; they’re cycling back to us through the food we eat, the water we drink, and even the air we breathe.” Yet, amid the gloom, hope emerges on multiple fronts: startups like The Ocean Cleanup deploy AI-powered drones to intercept plastic in riverways before it reaches the sea, recovering over 100,000 pounds of waste monthly, while countries like Canada and Norway have banned single-use plastics, slashing their marine litter by 30% in just two years. Scientists are also racing to engineer biodegradable alternatives, such as algae-based packaging that dissolves harmlessly in water and mycelium foam that replaces polystyrene. Public awareness campaigns, amplified by viral social media footage of sea turtles entangled in plastic straws, have spurred grassroots movements, with over 150 nations signing the Global Plastic Treaty in 2023 to halve plastic production by 2040. Still, challenges loom: microplastics buried in Arctic ice are being released as glaciers melt, and deep-sea sediments now contain 10 times more plastic than a decade ago. The clock is ticking, but the intersection of policy, technology, and collective action offers a fragile lifeline—not just for our oceans, but for the future of life on Earth. 
`,
    exercises: [
      {
        id: 'r3-mc-1',
        type: 'multiple-choice',
        question: 'What is the primary reason microplastics are considered a "slow-motion catastrophe" (Dr. Emily Carter’s quote)?',
        options: [
          'They only affect marine animals.',
          'They degrade naturally within a year.',
          'They re-enter human food and water systems.',
          'They are visible to the naked eye.'
        ],
        answer: 'They re-enter human food and water systems.'
      },
      {
        id: 'r3-mc-2',
        type: 'multiple-choice',
        question: 'Which region is specifically mentioned as having microplastics in 80% of its commercial fish?',
        options: [
          'The Arctic Ocean',
          'The Mediterranean Sea',
          'The Great Pacific Garbage Patch',
          'The Mariana Trench'
        ],
        answer: 'The Mediterranean Sea'
      },
      {
        id: 'r3-mc-3',
        type: 'multiple-choice',
        question: 'What percentage of plastic waste has Canada and Norway reduced after banning single-use plastics?',
        options: [
          '10%',
          '30%',
          '50%',
          '70%'
        ],
        answer: '30%'
      },
      {
        id: 'r3-mc-4',
        type: 'multiple-choice',
        question: 'What is the main function of AI-powered drones mentioned in the text?',
        options: [
          'Cleaning plastic from the Mariana Trench',
          'Intercepting plastic in riverways',
          'Producing biodegradable packaging',
          'Monitoring Arctic ice melt'
        ],
        answer: 'Intercepting plastic in riverways.'
      },
      {
        id: 'r3-mc-5',
        type: 'multiple-choice',
        question: 'Which toxic chemical is NOT mentioned as leaching from microplastics?',
        options: [
          'Phthalates',
          'Bisphenol A (BPA)',
          'Mercury',
          'All are mentioned'
        ],
        answer: 'Mercury'
      },
      {
        id: 'r3-mc-6',
        type: 'multiple-choice',
        question: 'What is the goal of the Global Plastic Treaty signed in 2023?',
        options: [
          'Eliminate all plastic production by 2030',
          'Halve plastic production by 2040',
          'Increase recycling rates by 50%',
          'Ban fishing gear worldwide'
        ],
        answer: 'Halve plastic production by 2040'
      },
     
      {
        id: 'r3-tf-1',
        type: 'true-false',
        question: 'Microplastics have been found in the Mariana Trench.',
        answer: true
      },
      {
        id: 'r3-tf-2',
        type: 'true-false',
        question: 'The Great Pacific Garbage Patch is twice the size of Australia.',
        answer: false
      },
      {
        id: 'r3-tf-3',
        type: 'true-false',
        question: 'Algae-based packaging dissolves harmlessly in water.',
        answer: true
      },
      {
        id: 'r3-tf-4',
        type: 'true-false',
        question: 'Over 200 nations signed the Global Plastic Treaty.',
        answer: false
      },
      {
        id: 'r3-tf-5',
        type: 'true-false',
        question: 'Microplastics in Arctic ice are decreasing due to glacier growth.',
        answer: false
      },
      {
        id: 'r3-fb-1',
        type: 'fill-blanks',
        question: 'Approximately ________ tons of plastic enter oceans annually.',
        answer: '14 million'
      },
      {
        id: 'r3-fb-2',
        type: 'fill-blanks',
        question: 'Microplastics leach toxic chemicals like ________ and bisphenol A.',
        answer: 'phthalates'
      },
      {
        id: 'r3-fb-3',
        type: 'fill-blanks',
        question: 'The Ocean Cleanup recovers over ________ pounds of waste monthly.',
        answer: '100,000'
      },
      {
        id: 'r3-fb-4',
        type: 'fill-blanks',
        question: 'Coral reefs in Indonesia are suffocating under layers of ________.',
        answer: 'plastic waste'
      },
      {
        id: 'r3-fb-5',
        type: 'fill-blanks',
        question: 'Mycelium foam is proposed as a replacement for ________.',
        answer: 'polystyrene'
      },
      {
        id: 'r3-fb-6',
        type: 'fill-blanks',
        question: 'The Global Plastic Treaty aims to halve plastic production by ________.',
        answer: '2040'
      },
    ]
  },
  
  {
    id: 'reading-4',
    title: "The Silent Invasion: Microplastics in Human Blood and the Race for Solutions",
    level: 'B2+',
    duration: '316 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1622391543141-a522421627cd?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
Microplastics—tiny plastic particles smaller than 5mm—have infiltrated every corner of the planet, from the peaks of the Himalayas to the depths of the Mariana Trench, but their most alarming breach is now inside human bodies. A groundbreaking 2024 study published in Environment International detected microplastics in 90% of blood samples from 2,000 participants across 30 countries, with polyethylene terephthalate (PET) and polystyrene (PS) being the most common types. These particles, shed from synthetic clothing, food packaging, and degraded plastic waste, enter the bloodstream via ingestion, inhalation, or skin contact, raising urgent questions about long-term health impacts. Researchers at Utrecht University linked microplastic exposure to chronic inflammation and oxidative stress, which may elevate risks of cardiovascular disease and autoimmune disorders. Meanwhile, a 2023 Nature investigation revealed that microplastics act as carriers for toxic additives like phthalates and bisphenol A (BPA), which disrupt endocrine systems and have been associated with infertility and developmental delays in children. The problem is accelerating: over 14 million tons of plastic enter oceans annually, breaking into trillions of fragments that persist for centuries. Coastal communities in Southeast Asia and Africa face dual crises—collapsing fisheries due to microplastic-choked waters and rising cancer rates linked to contaminated seafood. However, innovative solutions are emerging. Scientists at MIT engineered a cellulose-based nanomaterial that binds to microplastics in water, enabling efficient filtration, while the EU’s 2025 Single-Use Plastics Ban targets a 50% reduction in plastic waste. Biotech startups like Notpla are creating edible seaweed-based packaging, and the Global Microplastic Health Initiative, launched in 2023, funds research into detoxification therapies. Despite progress, challenges loom: microplastics embedded in Arctic ice are being released by global warming, and nanoplastics (particles under 0.1 microns) now permeate placental barriers, threatening fetal development. As Dr. Maria Hernandez, lead author of the Lancet Planetary Health 2024 review, warns, “We’re in a race against time—our bodies have become the final frontier for plastic pollution.”
`,
    exercises: [
      {
        id: 'r4-mc-1',
        type: 'multiple-choice',
        question: 'What is the primary source of PET microplastics found in human blood?',
        options: [
          'Medical implants',
          'Airborne pollen',
          'Natural fibers',
          'Synthetic clothing and food packaging'
        ],
        answer: 'Synthetic clothing and food packaging'
      },
      {
        id: 'r4-mc-2',
        type: 'multiple-choice',
        question: 'Which health risk is not linked to microplastic exposure in the text?',
        options: [
          'Improved immune response',
          'Cardiovascular disease',
          'Infertility',
          'Developmental delays'
        ],
        answer: 'Improved immune response'
      },
      {
        id: 'r4-mc-3',
        type: 'multiple-choice',
        question: 'How does MIT’s cellulose-based nanomaterial address microplastics?',
        options: [
          'By dissolving them in water',
          'By converting them into energy',
          'By accelerating their degradation',
          'By binding to them for filtration'
        ],
        answer: 'By binding to them for filtration'
      },
      {
        id: 'r4-mc-4',
        type: 'multiple-choice',
        question: 'What is the goal of the EU’s 2025 Single-Use Plastics Ban?',
        options: [
          'Eliminate all plastic production',
          'Promote biodegradable plastics',
          'Reduce plastic waste by 50%',
          'Increase recycling costs'
        ],
        answer: 'Reduce plastic waste by 50%'
      },
      {
        id: 'r4-mc-5',
        type: 'multiple-choice',
        question: 'Why are nanoplastics considered more dangerous than microplastics?',
        options: [
          'They can cross placental barriers',
          'They are visible to the naked eye',
          'They degrade faster',
          'They only exist in oceans'
        ],
        answer: 'They can cross placental barriers'
      },
      {
        id: 'r4-mc-6',
        type: 'multiple-choice',
        question: 'What global initiative funds detoxification research for microplastics?',
        options: [
          'The Paris Agreement',
          'The Clean Oceans Alliance',
          'The Kyoto Protocol',
          'The Global Microplastic Health Initiative'
        ],
        answer: 'The Global Microplastic Health Initiative'
      },
     
      {
        id: 'r4-tf-1',
        type: 'true-false',
        question: 'Microplastics were found in 90% of blood samples across 30 countries.',
        answer: true
      },
      {
        id: 'r4-tf-2',
        type: 'true-false',
        question: 'Phthalates are linked to improved cardiovascular health.',
        answer: false
      },
      {
        id: 'r4-tf-3',
        type: 'true-false',
        question: 'The Global Microplastic Health Initiative focuses on space exploration.',
        answer: false
      },
      {
        id: 'r4-tf-4',
        type: 'true-false',
        question: 'Arctic ice melting releases trapped microplastics.',
        answer: true
      },
      {
        id: 'r4-tf-5',
        type: 'true-false',
        question: 'Notpla produces synthetic plastic packaging.',
        answer: false
      },
      {
        id: 'r4-fb-1',
        type: 'fill-blanks',
        question: 'Over ________ tons of plastic enter oceans annually.',
        answer: '14 million'
      },
      {
        id: 'r4-fb-2',
        type: 'fill-blanks',
        question: 'Microplastics carry toxic additives like ________ and BPA.',
        answer: 'phthalates'
      },
      {
        id: 'r4-fb-3',
        type: 'fill-blanks',
        question: 'The EU’s 2025 ban aims to reduce plastic waste by ________%.',
        answer: '50'
      },
      {
        id: 'r4-fb-4',
        type: 'fill-blanks',
        question: '________ is an edible packaging material made from seaweed.',
        answer: 'Notpla'
      },
      {
        id: 'r4-fb-5',
        type: 'fill-blanks',
        question: 'Nanoparticles under ________ microns can cross placental barriers.',
        answer: '0.1'
      },
    ]
  },

  {
    id: 'reading-5',
    title: "The Nile in Peril: Climate Change and Hydropolitical Tensions in Egypt",
    level: 'B2',
    duration: '329 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1584719281074-f8d68cfc8f61?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
The Nile River, a lifeline sustaining Egypt’s civilization for millennia, faces unprecedented threats from climate change, anthropogenic pressures, and transboundary water disputes. Accounting for over 90% of Egypt’s freshwater, the Nile is under strain as rising temperatures, erratic rainfall, and upstream dam projects exacerbate water scarcity. The Grand Ethiopian Renaissance Dam (GERD), nearing completion on the Blue Nile, has intensified hydropolitical tensions, with Egypt fearing a 20-30% reduction in Nile flow, jeopardizing agriculture, drinking water, and hydropower for its 110 million population. A 2023 UNESCO report warns that the Nile Delta—home to 40% of Egypt’s population and 60% of its agriculture—is subsiding at 3-5 mm annually due to reduced sediment flow from dams and rising Mediterranean Sea levels, compounding salinization and arable land loss.
Ecological and Socioeconomic Impacts
Climate models project a 2-4°C temperature rise in the Nile Basin by 2050, which could slash river flow by 15-25% and increase evaporation rates. This aligns with findings from Cairo University’s 2024 study linking declining wheat yields (a staple crop) to soil salinity and water stress. Meanwhile, eutrophication from agricultural runoff has created hypoxic “dead zones” in the Delta’s lakes, decimating fish stocks critical to local livelihoods. The Aswan High Dam, once hailed as a marvel of engineering, now exemplifies unintended consequences: trapped sediments have starved downstream ecosystems, while its reservoir, Lake Nasser, loses 10-15 billion m³ annually to evaporation.
Innovative Mitigation and Regional Diplomacy
Egypt’s National Water Resources Plan 2037 prioritizes adaptive strategies, including drip irrigation systems to reduce agricultural water use (currently 85% of total consumption) and desalination plants targeting 6.4 million m³/day by 2030. Satellite-based monitoring, in collaboration with the European Space Agency, tracks groundwater depletion and illegal irrigation. Internationally, Egypt advocates for equitable Nile water-sharing under the 2015 Declaration of Principles, though Ethiopia’s GERD filling schedule remains contentious. Researchers at MIT propose “virtual water trade” strategies, importing water-intensive crops to alleviate pressure, while the African Development Bank funds solar-powered pumping stations to offset energy demands.
`,
    exercises: [
      {
        id: 'r5-mc-1',
        type: 'multiple-choice',
        question: 'What is the primary reason microplastics are considered a "slow-motion catastrophe" (Dr. Emily Carter’s quote)?',
        options: [
          'They only affect marine animals.',
          'They degrade naturally within a year.',
          'They re-enter human food and water systems.',
          'They are visible to the naked eye.'
        ],
        answer: 'They re-enter human food and water systems.'
      },
      {
        id: 'r5-mc-2',
        type: 'multiple-choice',
        question: 'Which region is specifically mentioned as having microplastics in 80% of its commercial fish?',
        options: [
          'The Arctic Ocean',
          'The Mediterranean Sea',
          'The Great Pacific Garbage Patch',
          'The Mariana Trench'
        ],
        answer: 'The Mediterranean Sea'
      },
      {
        id: 'r5-mc-3',
        type: 'multiple-choice',
        question: 'What percentage of plastic waste has Canada and Norway reduced after banning single-use plastics?',
        options: [
          '10%',
          '30%',
          '50%',
          '70%'
        ],
        answer: '30%'
      },
      {
        id: 'r5-mc-4',
        type: 'multiple-choice',
        question: 'What is the main function of AI-powered drones mentioned in the text?',
        options: [
          'Cleaning plastic from the Mariana Trench',
          'Intercepting plastic in riverways',
          'Producing biodegradable packaging',
          'Monitoring Arctic ice melt'
        ],
        answer: 'Intercepting plastic in riverways.'
      },
      {
        id: 'r5-mc-5',
        type: 'multiple-choice',
        question: 'Which toxic chemical is NOT mentioned as leaching from microplastics?',
        options: [
          'Phthalates',
          'Bisphenol A (BPA)',
          'Mercury',
          'All are mentioned'
        ],
        answer: 'Mercury'
      },
      {
        id: 'r5-mc-6',
        type: 'multiple-choice',
        question: 'What is the goal of the Global Plastic Treaty signed in 2023?',
        options: [
          'Eliminate all plastic production by 2030',
          'Halve plastic production by 2040',
          'Increase recycling rates by 50%',
          'Ban fishing gear worldwide'
        ],
        answer: 'Halve plastic production by 2040'
      },
     
      {
        id: 'r5-tf-1',
        type: 'true-false',
        question: 'Microplastics have been found in the Mariana Trench.',
        answer: true
      },
      {
        id: 'r5-tf-2',
        type: 'true-false',
        question: 'The Great Pacific Garbage Patch is twice the size of Australia.',
        answer: false
      },
      {
        id: 'r5-tf-3',
        type: 'true-false',
        question: 'Algae-based packaging dissolves harmlessly in water.',
        answer: true
      },
      {
        id: 'r5-tf-4',
        type: 'true-false',
        question: 'Over 200 nations signed the Global Plastic Treaty.',
        answer: false
      },
      {
        id: 'r5-tf-5',
        type: 'true-false',
        question: 'Microplastics in Arctic ice are decreasing due to glacier growth.',
        answer: false
      },
      {
        id: 'r5-fb-1',
        type: 'fill-blanks',
        question: 'Approximately ________ tons of plastic enter oceans annually.',
        answer: '14 million'
      },
      {
        id: 'r5-fb-2',
        type: 'fill-blanks',
        question: 'Microplastics leach toxic chemicals like ________ and bisphenol A.',
        answer: 'phthalates'
      },
      {
        id: 'r5-fb-3',
        type: 'fill-blanks',
        question: 'The Ocean Cleanup recovers over ________ pounds of waste monthly.',
        answer: '100,000'
      },
      {
        id: 'r5-fb-4',
        type: 'fill-blanks',
        question: 'Coral reefs in Indonesia are suffocating under layers of ________.',
        answer: 'plastic waste'
      },
      {
        id: 'r5-fb-5',
        type: 'fill-blanks',
        question: 'Mycelium foam is proposed as a replacement for ________.',
        answer: 'polystyrene'
      },
      {
        id: 'r5-fb-6',
        type: 'fill-blanks',
        question: 'The Global Plastic Treaty aims to halve plastic production by ________.',
        answer: '2040'
      },
    ]
  },
  {
    id: 'reading-6',
    title: "My Weekend",
    level: 'A2',
    duration: '187 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1628349407899-46565857ab55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
  Hello! My name is Emma. I want to tell you about my weekend. On Saturday, I wake up at 9 o’clock. I don’t go to school on weekends, so I can sleep late. After breakfast, I clean my room and help my mom. Then, I go to the park with my friends. We play football and ride our bikes. Sometimes, we have a picnic. We eat sandwiches and drink juice.
  In the afternoon, I visit my grandparents. They live near my house. My grandmother cooks delicious food, and my grandfather tells funny stories. I love spending time with them.
  On Sunday, I wake up early because I go to the swimming pool with my dad. I like swimming very much. After swimming, we eat lunch at a restaurant. I usually eat pizza or pasta.
  In the evening, I do my homework and watch a movie with my family. We watch comedies because they make us laugh. I go to bed at 10:00 because I have school on Monday.
  I love weekends because they are fun and relaxing. What about you? How do you spend your weekends?
  `,
    exercises: [
      {
        id: 'r5-mc-1',
        type: 'multiple-choice',
        question: 'What time does Emma wake up on Saturday?',
        options: [
          '7:00',
          '8:00',
          '9:00',
          '10:00'
        ],
        answer: '9:00'
      },
      {
        id: 'r5-mc-2',
        type: 'multiple-choice',
        question: 'What do Emma and her friends do at the park?',
        options: [
          'Watch movies',
          'Play football and ride bikes',
          'Go shopping',
          'Study English'
        ],
        answer: 'Play football and ride bikes'
      },
      {
        id: 'r5-mc-3',
        type: 'multiple-choice',
        question: 'Who cooks delicious food for Emma?',
        options: [
          'Her mom',
          'Her dad',
          'Her grandmother',
          'Her friend'
        ],
        answer: 'Her grandmother'
      },
      {
        id: 'r5-mc-4',
        type: 'multiple-choice',
        question: 'Where does Emma go on Sunday morning?',
        options: [
          'To school',
          'To the swimming pool',
          'To the library',
          'To the market'
        ],
        answer: 'To the swimming pool'
      },
      {
        id: 'r5-mc-5',
        type: 'multiple-choice',
        question: 'What does Emma usually eat at the restaurant?',
        options: [
          'Rice and vegetables',
          'Pizza or pasta',
          'Sandwiches',
          'Soup'
        ],
        answer: 'Pizza or pasta'
      },
      {
        id: 'r5-tf-1',
        type: 'true-false',
        question: 'Emma goes to school on weekends.',
        answer: false
      },
      {
        id: 'r5-tf-2',
        type: 'true-false',
        question: 'Emma’s grandparents live far from her house.',
        answer: false
      },
      {
        id: 'r5-tf-3',
        type: 'true-false',
        question: 'Emma likes swimming.',
        answer: true
      },
      {
        id: 'r5-tf-4',
        type: 'true-false',
        question: 'Emma does her homework on Sunday evening.',
        answer: true
      },
      {
        id: 'r5-tf-5',
        type: 'true-false',
        question: 'Emma goes to bed at 11:00 on Sunday.',
        answer: false
      },
      {
        id: 'r5-fb-1',
        type: 'fill-blanks',
        question: 'Emma wakes up at ______ on Saturday.',
        answer: '9 o’clock'
      },
      {
        id: 'r5-fb-2',
        type: 'fill-blanks',
        question: 'Emma and her friends have a ______ at the park.',
        answer: 'picnic'
      },
      {
        id: 'r5-fb-3',
        type: 'fill-blanks',
        question: 'Emma’s ______ tells funny stories.',
        answer: 'grandfather'
      },
      {
        id: 'r5-fb-4',
        type: 'fill-blanks',
        question: 'Emma goes to the ______ with her dad on Sunday.',
        answer: 'swimming pool'
      },
      {
        id: 'r5-fb-5',
        type: 'fill-blanks',
        question: 'Emma watches ______ with her family in the evening.',
        answer: 'a movie'
      }
    ]
  },
  {
    id: 'reading-7',
    title: "My Hobbies",
    level: 'A1',
    duration: '250 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1466584241662-8cb021032c1a?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
  Hello! My name is Alex. I want to tell you about my hobbies. I have many hobbies because I like trying new things. My favorite hobby is reading books. I love adventure and mystery books. I usually read before going to bed.
  I also like playing the guitar. I take guitar lessons every Wednesday. My teacher is very kind, and I am learning new songs every week. Sometimes, I play the guitar for my family, and they enjoy listening to me.
  Another hobby of mine is painting. I like drawing nature and animals. I use watercolors and pencils. My mom says I am very creative. I often give my paintings to my friends as gifts.
  On weekends, I go cycling with my dad. We ride our bikes in the park or near the lake. It is fun and healthy. I also like taking photos during our rides.
  Hobbies make me happy and help me relax. What about you? What are your hobbies?
  `,
    exercises: [
      {
        id: 'r7-mc-1',
        type: 'multiple-choice',
        question: 'What is Alex’s favorite hobby?',
        options: [
          'Playing the guitar',
          'Reading books',
          'Painting',
          'Cycling'
        ],
        answer: 'Reading books'
      },
      {
        id: 'r7-mc-2',
        type: 'multiple-choice',
        question: 'When does Alex take guitar lessons?',
        options: [
          'Every Monday',
          'Every Wednesday',
          'Every Friday',
          'Every Sunday'
        ],
        answer: 'Every Wednesday'
      },
      {
        id: 'r7-mc-3',
        type: 'multiple-choice',
        question: 'What does Alex like to draw?',
        options: [
          'Buildings',
          'Nature and animals',
          'Cars',
          'People'
        ],
        answer: 'Nature and animals'
      },
      {
        id: 'r7-mc-4',
        type: 'multiple-choice',
        question: 'Who does Alex go cycling with?',
        options: [
          'His mom',
          'His dad',
          'His friends',
          'His teacher'
        ],
        answer: 'His dad'
      },
      {
        id: 'r7-mc-5',
        type: 'multiple-choice',
        question: 'What does Alex do during cycling rides?',
        options: [
          'Listens to music',
          'Takes photos',
          'Reads books',
          'Paints pictures'
        ],
        answer: 'Takes photos'
      },
      {
        id: 'r7-tf-1',
        type: 'true-false',
        question: 'Alex’s favorite hobby is playing the guitar.',
        answer: false
      },
      {
        id: 'r7-tf-2',
        type: 'true-false',
        question: 'Alex gives his paintings to his friends as gifts.',
        answer: true
      },
      {
        id: 'r7-tf-3',
        type: 'true-false',
        question: 'Alex goes cycling every day.',
        answer: false
      },
      {
        id: 'r7-tf-4',
        type: 'true-false',
        question: 'Alex’s mom thinks he is creative.',
        answer: true
      },
      {
        id: 'r7-tf-5',
        type: 'true-false',
        question: 'Alex takes guitar lessons on Fridays.',
        answer: false
      },
      {
        id: 'r7-fb-1',
        type: 'fill-blanks',
        question: 'Alex’s favorite hobby is ______.',
        answer: 'reading books'
      },
      {
        id: 'r7-fb-2',
        type: 'fill-blanks',
        question: 'Alex takes guitar lessons every ______.',
        answer: 'Wednesday'
      },
      {
        id: 'r7-fb-3',
        type: 'fill-blanks',
        question: 'Alex likes drawing ______ and animals.',
        answer: 'nature'
      },
      {
        id: 'r7-fb-4',
        type: 'fill-blanks',
        question: 'Alex goes cycling with his ______.',
        answer: 'dad'
      },
      {
        id: 'r7-fb-5',
        type: 'fill-blanks',
        question: 'Alex takes ______ during cycling rides.',
        answer: 'photos'
      }
    ]
  },
  {
    id: 'reading-8',
    title: "My Favorite City – Istanbul",
    level: 'A1',
    duration: '250 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
  Hello! My name is Lara. I want to tell you about my favorite city, Istanbul. Istanbul is a very big and beautiful city in Turkey. It is between Europe and Asia, so it is a bridge between two continents.
  Istanbul has many historical places. The most famous one is the Hagia Sophia. It is a museum now, but it was a church and a mosque before. Another famous place is the Blue Mosque. It has beautiful blue tiles inside. I love visiting these places with my family.
  Istanbul is also famous for its bazaars. The Grand Bazaar is one of the oldest and largest markets in the world. You can buy many things there, like spices, clothes, and jewelry. I like walking in the bazaars and trying Turkish delight.
  The Bosphorus is another special thing in Istanbul. It is a strait that divides the city into two parts. You can take a boat tour on the Bosphorus and see the city from the water. It is very relaxing.
  Istanbul is a city full of life, history, and culture. I love living here because there is always something new to discover. Have you ever visited Istanbul?
  `,
    exercises: [
      {
        id: 'r8-mc-1',
        type: 'multiple-choice',
        question: 'Where is Istanbul located?',
        options: [
          'Only in Europe',
          'Only in Asia',
          'Between Europe and Asia',
          'In Africa'
        ],
        answer: 'Between Europe and Asia'
      },
      {
        id: 'r8-mc-2',
        type: 'multiple-choice',
        question: 'What is the Hagia Sophia now?',
        options: [
          'A church',
          'A mosque',
          'A museum',
          'A market'
        ],
        answer: 'A museum'
      },
      {
        id: 'r8-mc-3',
        type: 'multiple-choice',
        question: 'What is special about the Blue Mosque?',
        options: [
          'It is very old',
          'It has blue tiles inside',
          'It is the largest mosque',
          'It is in Asia'
        ],
        answer: 'It has blue tiles inside'
      },
      {
        id: 'r8-mc-4',
        type: 'multiple-choice',
        question: 'What can you buy at the Grand Bazaar?',
        options: [
          'Books',
          'Electronics',
          'Spices, clothes, and jewelry',
          'Cars'
        ],
        answer: 'Spices, clothes, and jewelry'
      },
      {
        id: 'r8-mc-5',
        type: 'multiple-choice',
        question: 'What is the Bosphorus?',
        options: [
          'A mountain',
          'A strait',
          'A market',
          'A mosque'
        ],
        answer: 'A strait'
      },
      {
        id: 'r8-tf-1',
        type: 'true-false',
        question: 'Istanbul is only in Europe.',
        answer: false
      },
      {
        id: 'r8-tf-2',
        type: 'true-false',
        question: 'The Hagia Sophia was only a church in the past.',
        answer: false
      },
      {
        id: 'r8-tf-3',
        type: 'true-false',
        question: 'The Grand Bazaar is one of the oldest markets in the world.',
        answer: true
      },
      {
        id: 'r8-tf-4',
        type: 'true-false',
        question: 'The Bosphorus divides Istanbul into two parts.',
        answer: true
      },
      {
        id: 'r8-tf-5',
        type: 'true-false',
        question: 'Lara does not like living in Istanbul.',
        answer: false
      },
      {
        id: 'r8-fb-1',
        type: 'fill-blanks',
        question: 'Istanbul is a bridge between ______ and Asia.',
        answer: 'Europe'
      },
      {
        id: 'r8-fb-2',
        type: 'fill-blanks',
        question: 'The Hagia Sophia is a ______ now.',
        answer: 'museum'
      },
      {
        id: 'r8-fb-3',
        type: 'fill-blanks',
        question: 'The Blue Mosque has beautiful ______ tiles inside.',
        answer: 'blue'
      },
      {
        id: 'r8-fb-4',
        type: 'fill-blanks',
        question: 'The Grand Bazaar is one of the oldest ______ in the world.',
        answer: 'markets'
      },
      {
        id: 'r8-fb-5',
        type: 'fill-blanks',
        question: 'The ______ divides Istanbul into two parts.',
        answer: 'Bosphorus'
      }
    ]
  },
  {
    id: 'reading-9',
    title: "My Family",
    level: 'A2',
    duration: '200 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1532377416656-e35d0e574765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
  Hello! My name is Emily. I want to tell you about my family. There are four people in my family: my mom, my dad, my brother, and me.
  My mom’s name is Sarah. She is a teacher. She works at a primary school. She loves cooking and reading books. She always helps me with my homework.
  My dad’s name is John. He is an engineer. He works in a big company. He likes playing football and watching movies. On weekends, he teaches me how to play chess.
  My brother’s name is Tom. He is 10 years old. He is a student. He loves playing video games and riding his bike. Sometimes, we play together in the garden.
  I love my family very much. We spend time together every evening. We eat dinner, watch TV, and talk about our day. Family is very important to me.
  `,
    exercises: [
      {
        id: 'r9-mc-1',
        type: 'multiple-choice',
        question: 'What is Emily’s mom’s job?',
        options: [
          'Engineer',
          'Teacher',
          'Doctor',
          'Chef'
        ],
        answer: 'Teacher'
      },
      {
        id: 'r9-mc-2',
        type: 'multiple-choice',
        question: 'What does Emily’s dad like to do?',
        options: [
          'Read books',
          'Play football',
          'Cook',
          'Ride a bike'
        ],
        answer: 'Play football'
      },
      {
        id: 'r9-mc-3',
        type: 'multiple-choice',
        question: 'How old is Emily’s brother?',
        options: [
          '8 years old',
          '10 years old',
          '12 years old',
          '14 years old'
        ],
        answer: '10 years old'
      },
      {
        id: 'r9-mc-4',
        type: 'multiple-choice',
        question: 'What do Emily and her family do every evening?',
        options: [
          'Play video games',
          'Eat dinner and watch TV',
          'Go to the park',
          'Cook together'
        ],
        answer: 'Eat dinner and watch TV'
      },
      {
        id: 'r9-mc-5',
        type: 'multiple-choice',
        question: 'What does Emily’s brother love to do?',
        options: [
          'Read books',
          'Play chess',
          'Play video games',
          'Cook'
        ],
        answer: 'Play video games'
      },
      {
        id: 'r9-tf-1',
        type: 'true-false',
        question: 'Emily’s mom is a doctor.',
        answer: false
      },
      {
        id: 'r9-tf-2',
        type: 'true-false',
        question: 'Emily’s dad teaches her how to play chess.',
        answer: true
      },
      {
        id: 'r9-tf-3',
        type: 'true-false',
        question: 'Emily’s brother is 12 years old.',
        answer: false
      },
      {
        id: 'r9-tf-4',
        type: 'true-false',
        question: 'Emily’s family eats dinner together every evening.',
        answer: true
      },
      {
        id: 'r9-tf-5',
        type: 'true-false',
        question: 'Emily’s brother loves riding his bike.',
        answer: true
      },
      {
        id: 'r9-fb-1',
        type: 'fill-blanks',
        question: 'Emily’s mom’s name is ______.',
        answer: 'Sarah'
      },
      {
        id: 'r9-fb-2',
        type: 'fill-blanks',
        question: 'Emily’s dad is an ______.',
        answer: 'engineer'
      },
      {
        id: 'r9-fb-3',
        type: 'fill-blanks',
        question: 'Emily’s brother loves playing ______ games.',
        answer: 'video'
      },
      {
        id: 'r9-fb-4',
        type: 'fill-blanks',
        question: 'Emily’s dad likes playing ______.',
        answer: 'football'
      },
      {
        id: 'r9-fb-5',
        type: 'fill-blanks',
        question: 'Emily’s family is very ______ to her.',
        answer: 'important'
      }
    ]
  },
  {
    id: 'reading-10',
    title: "My House",
    level: 'A2',
    duration: '200 Words',
    type: 'reading',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
  Hello! My name is Daniel. I want to tell you about my house. My house is not very big, but it is cozy and comfortable.
  When you enter my house, you see the living room. There is a sofa, a TV, and a bookshelf. We watch TV and relax here. There are also some plants near the window.
  Next to the living room is the kitchen. It is small but modern. We have a fridge, an oven, and a dishwasher. My mom cooks delicious meals here.
  Upstairs, there are three bedrooms. My bedroom is the smallest one. It has a bed, a desk, and a wardrobe. I study and sleep here. My parents’ bedroom is bigger, and my sister’s room is very colorful.
  We also have a small garden. There are flowers and a tree. Sometimes, we have breakfast in the garden.
  I love my house because it is warm and peaceful. What about you? Can you tell me about your house?
  `,
    exercises: [
      {
        id: 'r10-mc-1',
        type: 'multiple-choice',
        question: 'What is in Daniel’s living room?',
        options: [
          'A bed and a desk',
          'A sofa, a TV, and a bookshelf',
          'A fridge and an oven',
          'A dishwasher'
        ],
        answer: 'A sofa, a TV, and a bookshelf'
      },
      {
        id: 'r10-mc-2',
        type: 'multiple-choice',
        question: 'What is next to the living room?',
        options: [
          'The garden',
          'The kitchen',
          'The bedroom',
          'The bathroom'
        ],
        answer: 'The kitchen'
      },
      {
        id: 'r10-mc-3',
        type: 'multiple-choice',
        question: 'What does Daniel’s mom cook?',
        options: [
          'Breakfast',
          'Delicious meals',
          'Only desserts',
          'Fast food'
        ],
        answer: 'Delicious meals'
      },
      {
        id: 'r10-mc-4',
        type: 'multiple-choice',
        question: 'What is in Daniel’s bedroom?',
        options: [
          'A sofa and a TV',
          'A bed, a desk, and a wardrobe',
          'A fridge and an oven',
          'A dishwasher'
        ],
        answer: 'A bed, a desk, and a wardrobe'
      },
      {
        id: 'r10-mc-5',
        type: 'multiple-choice',
        question: 'What is in the garden?',
        options: [
          'A TV and a sofa',
          'Flowers and a tree',
          'A fridge and an oven',
          'A bookshelf'
        ],
        answer: 'Flowers and a tree'
      },
      {
        id: 'r10-tf-1',
        type: 'true-false',
        question: 'Daniel’s house is very big.',
        answer: false
      },
      {
        id: 'r10-tf-2',
        type: 'true-false',
        question: 'The kitchen is next to the living room.',
        answer: true
      },
      {
        id: 'r10-tf-3',
        type: 'true-false',
        question: 'Daniel’s bedroom is the biggest room in the house.',
        answer: false
      },
      {
        id: 'r10-tf-4',
        type: 'true-false',
        question: 'Daniel’s sister’s room is very colorful.',
        answer: true
      },
      {
        id: 'r10-tf-5',
        type: 'true-false',
        question: 'Daniel’s family sometimes has breakfast in the garden.',
        answer: true
      },
      {
        id: 'r10-fb-1',
        type: 'fill-blanks',
        question: 'Daniel’s house is ______ and comfortable.',
        answer: 'cozy'
      },
      {
        id: 'r10-fb-2',
        type: 'fill-blanks',
        question: 'The living room has a ______, a TV, and a bookshelf.',
        answer: 'sofa'
      },
      {
        id: 'r10-fb-3',
        type: 'fill-blanks',
        question: 'Daniel’s mom cooks ______ meals in the kitchen.',
        answer: 'delicious'
      },
      {
        id: 'r10-fb-4',
        type: 'fill-blanks',
        question: 'Daniel’s bedroom has a bed, a desk, and a ______.',
        answer: 'wardrobe'
      },
      {
        id: 'r10-fb-5',
        type: 'fill-blanks',
        question: 'The garden has ______ and a tree.',
        answer: 'flowers'
      }
    ]
  },
  {
    "id": "listening-1",
    "title": "The Mysteries of the Deep Ocean",
    "level": "B2",
    "duration": "3 minutes",
    "type": "listening",
    "imageUrl": "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVlcCUyMG9jZWFufGVufDB8fDB8fHww",
    "audioFile": "deep_ocean.mp3",
    "exercises": [
      {
        "id": "l1-mc-1",
        "type": "multiple-choice",
        "question": "What percentage of the ocean remains unexplored?",
        "options": [
          "50%",
          "70%",
          "80%",
          "90%"
        ],
        "answer": "80%"
      },
      {
        "id": "l1-mc-2",
        "type": "multiple-choice",
        "question": "What is the name of the zone where sunlight begins to fade?",
        "options": [
          "Midnight Zone",
          "Twilight Zone",
          "Abyssal Zone",
          "Sunlight Zone"
        ],
        "answer": "Twilight Zone"
      },
      {
        "id": "l1-mc-3",
        "type": "multiple-choice",
        "question": "Which creature is mentioned as using bioluminescence to attract prey?",
        "options": [
          "Giant Squid",
          "Anglerfish",
          "Dolphin",
          "Jellyfish"
        ],
        "answer": "Anglerfish"
      },
      {
        "id": "l1-mc-4",
        "type": "multiple-choice",
        "question": "How deep is the Mariana Trench?",
        "options": [
          "5,000 meters",
          "8,000 meters",
          "11,000 meters",
          "13,000 meters"
        ],
        "answer": "11,000 meters"
      },
      {
        "id": "l1-mc-5",
        "type": "multiple-choice",
        "question": "What is one potential use of deep-sea organisms mentioned in the text?",
        "options": [
          "Space exploration",
          "Cancer research",
          "Renewable energy",
          "Agriculture"
        ],
        "answer": "Cancer research"
      },
      {
        "id": "l1-fb-1",
        "type": "fill-blanks",
        "question": "The deep ocean begins at around __________ meters below the surface.",
        "answer": "200"
      },
      {
        "id": "l1-fb-2",
        "type": "fill-blanks",
        "question": "The __________ zone is where the pressure is over 1,000 times greater than at the surface.",
        "answer": "midnight"
      },
      {
        "id": "l1-fb-3",
        "type": "fill-blanks",
        "question": "The Mariana Trench is located in the __________ Ocean.",
        "answer": "Pacific"
      },
      {
        "id": "l1-fb-4",
        "type": "fill-blanks",
        "question": "Giant squids can grow up to __________ meters long.",
        "answer": "13"
      },
      {
        "id": "l1-fb-5",
        "type": "fill-blanks",
        "question": "Enzymes from deep-sea __________ are being used in medical research.",
        "answer": "bacteria"
      },
      {
        "id": "l1-tf-1",
        "type": "true-false",
        "question": "True or False: Over 70% of the Earth's surface is covered by the ocean.",
        "answer": true
      },
      {
        "id": "l1-tf-2",
        "type": "true-false",
        "question": "True or False: The twilight zone is the deepest part of the ocean.",
        "answer": false
      },
      {
        "id": "l1-tf-3",
        "type": "true-false",
        "question": "True or False: Bioluminescent animals use light to communicate and attract prey.",
        "answer": true
      },
      {
        "id": "l1-tf-4",
        "type": "true-false",
        "question": "True or False: The Mariana Trench is deeper than Mount Everest is tall.",
        "answer": true
      },
      {
        "id": "l1-tf-5",
        "type": "true-false",
        "question": "True or False: Pollution and climate change do not affect the deep ocean.",
        "answer": false
      }
    ]
  },
  {
    "id": "listening-2",
    "title": "The Rise and Fall of the Roman Empire",
    "level": "B2",
    "duration": "2 minutes",
    "type": "listening",
    "imageUrl": "https://images.unsplash.com/photo-1603199766813-af69e6aa8502?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "audioFile": "roman-empire.mp3",
    "exercises": [
      {
        "id": "l2-mc-1",
        "type": "multiple-choice",
        "question": "When did the Roman Empire begin?",
        "options": [
          "44 BCE",
          "27 BCE",
          "14 CE",
          "476 CE"
        ],
        "answer": "27 BCE"
      },
      {
        "id": "l2-mc-2",
        "type": "multiple-choice",
        "question": "What was the period of stability and prosperity in the Roman Empire called?",
        "options": [
          "The Golden Age",
          "The Renaissance",
          "The Pax Romana",
          "The Dark Ages"
        ],
        "answer": "The Pax Romana"
      },
      {
        "id": "l2-mc-3",
        "type": "multiple-choice",
        "question": "Which structure was NOT built during the Roman Empire?",
        "options": [
          "The Colosseum",
          "The Great Wall of China",
          "The Aqueducts",
          "The Pantheon"
        ],
        "answer": "The Great Wall of China"
      },
      {
        "id": "l2-mc-4",
        "type": "multiple-choice",
        "question": "Who was the last emperor of the Western Roman Empire?",
        "options": [
          "Julius Caesar",
          "Augustus",
          "Romulus Augustulus",
          "Constantine"
        ],
        "answer": "Romulus Augustulus"
      },
      {
        "id": "l2-mc-5",
        "type": "multiple-choice",
        "question": "What language evolved from Latin?",
        "options": [
          "Greek",
          "English",
          "French",
          "Arabic"
        ],
        "answer": "French"
      },
      {
        "id": "l2-fb-1",
        "type": "fill-blanks",
        "question": "The Roman Empire began in __________ BCE.",
        "answer": "27"
      },
      {
        "id": "l2-fb-2",
        "type": "fill-blanks",
        "question": "The period of peace and stability in the Roman Empire was called the __________.",
        "answer": "Pax Romana"
      },
      {
        "id": "l2-fb-3",
        "type": "fill-blanks",
        "question": "The Western Roman Empire fell in __________ CE.",
        "answer": "476"
      },
      {
        "id": "l2-fb-4",
        "type": "fill-blanks",
        "question": "The Eastern Roman Empire is also known as the __________ Empire.",
        "answer": "Byzantine"
      },
      {
        "id": "l2-fb-5",
        "type": "fill-blanks",
        "question": "Latin evolved into many modern __________ languages.",
        "answer": "European"
      },
      {
        "id": "l2-tf-1",
        "type": "true-false",
        "question": "True or False: The Roman Empire began as a republic.",
        "answer": true
      },
      {
        "id": "l2-tf-2",
        "type": "true-false",
        "question": "True or False: The Pax Romana lasted for about 500 years.",
        "answer": false
      },
      {
        "id": "l2-tf-3",
        "type": "true-false",
        "question": "True or False: The Colosseum was built during the Roman Empire.",
        "answer": true
      },
      {
        "id": "l2-tf-4",
        "type": "true-false",
        "question": "True or False: The Eastern Roman Empire fell in 476 CE.",
        "answer": false
      },
      {
        "id": "l2-tf-5",
        "type": "true-false",
        "question": "True or False: Roman law has no influence on modern legal systems.",
        "answer": false
      }
    ]
  },
  {
    "id": "listening-3",
    "title": "The Evolution of Artificial Intelligence and Technology",
    "level": "B2",
    "duration": "2.25 minutes",
    "type": "listening",
    "imageUrl": "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "audioFile": "ai-technology.mp3",
    "exercises": [
      {
        "id": "l3-mc-1",
        "type": "multiple-choice",
        "question": "When was the term 'Artificial Intelligence' first coined?",
        "options": [
          "1945",
          "1980",
          "1956",
          "2000"
        ],
        "answer": "1956"
      },
      {
        "id": "l3-mc-2",
        "type": "multiple-choice",
        "question": "What is machine learning?",
        "options": [
          "A type of robot",
          "A subset of AI that allows computers to learn from data",
          "A programming language",
          "A form of virtual reality"
        ],
        "answer": "A subset of AI that allows computers to learn from data"
      },
      {
        "id": "l3-mc-3",
        "type": "multiple-choice",
        "question": "Which of the following is an example of AI in everyday life?",
        "options": [
          "Self-driving cars",
          "Microwave ovens",
          "Manual typewriters",
          "Analog clocks"
        ],
        "answer": "Self-driving cars"
      },
      {
        "id": "l3-mc-4",
        "type": "multiple-choice",
        "question": "What is deep learning?",
        "options": [
          "A type of AI that mimics human creativity",
          "A tool for creating websites",
          "A method for building physical robots",
          "A more advanced form of machine learning"
        ],
        "answer": "A more advanced form of machine learning"
      },
      {
        "id": "l3-mc-5",
        "type": "multiple-choice",
        "question": "What is one ethical concern related to AI?",
        "options": [
          "Increased battery life in smartphones",
          "Data privacy",
          "Faster internet speeds",
          "Improved weather forecasting"
        ],
        "answer": "Data privacy"
      },
      {
        "id": "l3-fb-1",
        "type": "fill-blanks",
        "question": "The term 'Artificial Intelligence' was first coined in __________.",
        "answer": "1956"
      },
      {
        "id": "l3-fb-2",
        "type": "fill-blanks",
        "question": "Machine learning allows computers to learn from __________.",
        "answer": "data"
      },
      {
        "id": "l3-fb-3",
        "type": "fill-blanks",
        "question": "Deep learning is a more advanced form of __________.",
        "answer": "machine learning"
      },
      {
        "id": "l3-fb-4",
        "type": "fill-blanks",
        "question": "AI is used in medical __________ to help diagnose diseases.",
        "answer": "diagnostics"
      },
      {
        "id": "l3-fb-5",
        "type": "fill-blanks",
        "question": "One ethical concern about AI is __________ bias in algorithms.",
        "answer": "algorithmic"
      },
      {
        "id": "l3-tf-1",
        "type": "true-false",
        "question": "True or False: AI research began in the 1950s.",
        "answer": true
      },
      {
        "id": "l3-tf-2",
        "type": "true-false",
        "question": "True or False: Machine learning requires computers to be explicitly programmed for every task.",
        "answer": false
      },
      {
        "id": "l3-tf-3",
        "type": "true-false",
        "question": "True or False: Deep learning can be used to create art and music.",
        "answer": true
      },
      {
        "id": "l3-tf-4",
        "type": "true-false",
        "question": "True or False: AI has no impact on job markets.",
        "answer": false
      },
      {
        "id": "l3-tf-5",
        "type": "true-false",
        "question": "True or False: Ethical concerns about AI include data privacy and algorithmic bias.",
        "answer": true
      }
    ]
  },
  {
    "id": "listening-4",
    "title": "Introducing Yourself",
    "level": "A2",
    "duration": "2 minutes",
    "type": "listening",
    "imageUrl": "https://images.unsplash.com/photo-1500576992153-0271099def59?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "audioFile": "introduction.mp3",
    "exercises": [
      {
        "id": "l4-mc-1",
        "type": "multiple-choice",
        "question": "What is Anna's job?",
        "options": [
          "Doctor",
          "Teacher",
          "Engineer",
          "Artist"
        ],
        "answer": "Teacher"
      },
      {
        "id": "l4-mc-2",
        "type": "multiple-choice",
        "question": "What is Anna's favorite book?",
        "options": [
          "The Alchemist",
          "Harry Potter",
          "1984",
          "Pride and Prejudice"
        ],
        "answer": "Harry Potter"
      },
      {
        "id": "l4-mc-3",
        "type": "multiple-choice",
        "question": "Who does Anna live with?",
        "options": [
          "Her friends",
          "Her parents and cat",
          "Her brother",
          "Her husband"
        ],
        "answer": "Her parents and cat"
      },
      {
        "id": "l4-fb-1",
        "type": "fill-blanks",
        "question": "Anna lives in __________.",
        "answer": "Istanbul"
      },
      {
        "id": "l4-fb-2",
        "type": "fill-blanks",
        "question": "Anna's cat is named __________.",
        "answer": "Mimi"
      },
      {
        "id": "l4-fb-3",
        "type": "fill-blanks",
        "question": "Anna visited __________ last year.",
        "answer": "Paris"
      },
      {
        "id": "l4-tf-1",
        "type": "true-false",
        "question": "True or False: Anna is 30 years old.",
        "answer": false
      },
      {
        "id": "l4-tf-2",
        "type": "true-false",
        "question": "True or False: Anna enjoys reading books and watching movies.",
        "answer": true
      },
      {
        "id": "l4-tf-3",
        "type": "true-false",
        "question": "True or False: Anna has a dog named Mimi.",
        "answer": false
      }
    ]
  },
  {
    "id": "listening-5",
    "title": "A City Tour",
    "level": "A2",
    "duration": "2 minutes",
    "type": "listening",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "audioFile": "barcelona.mp3",
    "exercises": [
      {
        "id": "l5-mc-1",
        "type": "multiple-choice",
        "question": "What is Sagrada Familia?",
        "options": [
          "A park",
          "A church",
          "A museum",
          "A beach"
        ],
        "answer": "A church"
      },
      {
        "id": "l5-mc-2",
        "type": "multiple-choice",
        "question": "Who designed Park Güell?",
        "options": [
          "Pablo Picasso",
          "Antoni Gaudí",
          "Salvador Dalí",
          "Leonardo da Vinci"
        ],
        "answer": "Antoni Gaudí"
      },
      {
        "id": "l5-mc-3",
        "type": "multiple-choice",
        "question": "What can you do at La Rambla?",
        "options": [
          "Swim",
          "Visit shops and restaurants",
          "See colorful mosaics",
          "Watch a football match"
        ],
        "answer": "Visit shops and restaurants"
      },
      {
        "id": "l5-fb-1",
        "type": "fill-blanks",
        "question": "Barcelona is located by the __________ Sea.",
        "answer": "Mediterranean"
      },
      {
        "id": "l5-fb-2",
        "type": "fill-blanks",
        "question": "Sagrada Familia is still under __________.",
        "answer": "construction"
      },
      {
        "id": "l5-fb-3",
        "type": "fill-blanks",
        "question": "Park Güell has amazing __________ of the city.",
        "answer": "views"
      },
      {
        "id": "l5-tf-1",
        "type": "true-false",
        "question": "True or False: Barcelona is famous for its beaches and architecture.",
        "answer": true
      },
      {
        "id": "l5-tf-2",
        "type": "true-false",
        "question": "True or False: La Rambla is a quiet street with no shops.",
        "answer": false
      },
      {
        "id": "l5-tf-3",
        "type": "true-false",
        "question": "True or False: Park Güell was designed by Pablo Picasso.",
        "answer": false
      }
    ]
  },
  {
    "id": "listening-6",
    "title": "Basic Facts About Space",
    "level": "A2",
    "duration": "2 minutes",
    "type": "listening",
    "imageUrl": "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "audioFile": "space.mp3",
    "exercises": [
      {
        "id": "l6-mc-1",
        "type": "multiple-choice",
        "question": "What is at the center of the solar system?",
        "options": [
          "The Moon",
          "The Earth",
          "The Sun",
          "Mars"
        ],
        "answer": "The Sun"
      },
      {
        "id": "l6-mc-2",
        "type": "multiple-choice",
        "question": "Who was the first man on the Moon?",
        "options": [
          "Yuri Gagarin",
          "Neil Armstrong",
          "Buzz Aldrin",
          "John Glenn"
        ],
        "answer": "Neil Armstrong"
      },
      {
        "id": "l6-mc-3",
        "type": "multiple-choice",
        "question": "What do astronauts wear in space?",
        "options": [
          "Uniforms",
          "Spacesuits",
          "Jackets",
          "Helmets"
        ],
        "answer": "Spacesuits"
      },
      {
        "id": "l6-fb-1",
        "type": "fill-blanks",
        "question": "The Moon is Earth's only natural __________.",
        "answer": "satellite"
      },
      {
        "id": "l6-fb-2",
        "type": "fill-blanks",
        "question": "Neil Armstrong walked on the Moon in __________.",
        "answer": "1969"
      },
      {
        "id": "l6-fb-3",
        "type": "fill-blanks",
        "question": "Space is full of __________ and galaxies.",
        "answer": "stars"
      },
      {
        "id": "l6-tf-1",
        "type": "true-false",
        "question": "True or False: The Sun is a planet.",
        "answer": false
      },
      {
        "id": "l6-tf-2",
        "type": "true-false",
        "question": "True or False: The Moon takes about 28 days to orbit the Earth.",
        "answer": true
      },
      {
        "id": "l6-tf-3",
        "type": "true-false",
        "question": "True or False: Scientists know everything about black holes.",
        "answer": false
      },
    ]
      
  },
    
  
];