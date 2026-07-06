const questions = [
  {
    category: 'Visibility',
    text: 'How do new potential clients typically discover your business?',
    answers: [
      'I rely mainly on referrals, word of mouth or people already knowing about me.',
      'I have some visibility, but new people rarely discover my business without a direct introduction or recommendation.',
      'People sometimes find me through search, social media, directories, local presence or other channels, but it is inconsistent.',
      'I actively show up in places my ideal clients are likely to look, and new people regularly discover my business.',
      'My business has strong visibility across relevant channels, and I consistently attract people who had no previous connection to me.'
    ]
  },
  {
    category: 'Visibility',
    text: 'When someone first comes across your business, how easily can they understand what you do and who you help?',
    answers: [
      'It would probably be difficult without speaking to me directly; my messaging does not clearly explain what I offer or who it is for.',
      'They could get a general idea, but they may need to search through my content or ask questions to understand exactly how I help.',
      'My main service is reasonably clear, although some parts of my offer, audience or positioning could be easier to understand.',
      'Most people can quickly understand what I do, who I help and the type of problem I solve.',
      'My business is immediately clear and distinctive; the right people can quickly recognise that my service is relevant to them and understand why.'
    ]
  },
  {
    category: 'Visibility',
    text: 'How consistently does your business show up in the places your ideal clients are likely to be looking?',
    answers: [
      'I rarely show up consistently anywhere and tend to rely on occasional activity or word of mouth.',
      'I show up from time to time, but my activity is irregular and often stops when I get busy.',
      'I maintain a presence in at least one relevant place, but my consistency or reach could be stronger.',
      'I show up consistently in one or more places that are genuinely relevant to my ideal clients.',
      'I have a deliberate, consistent presence across the most relevant channels for my business, with clear routes for new people to discover me.'
    ]
  },
  {
    category: 'Visibility',
    text: 'If someone hears about your business and searches for you, what are they likely to find?',
    answers: [
      'Very little, outdated information, or nothing that gives them a useful picture of my business.',
      'They may find a social profile, directory listing or basic information, but it is limited or not consistently up to date.',
      'They can find useful information about me, although it may be spread across different places or require some effort to piece together.',
      'They can quickly find accurate, current information that clearly explains my business and how to take the next step.',
      'They find a strong, joined-up presence that reinforces what they have heard, answers likely questions and makes it easy to explore my business further.'
    ]
  },
  {
    category: 'Credibility',
    text: 'How well does your business presence reflect the quality of the service you actually provide?',
    answers: [
      'There is a significant gap; my business looks much less established or professional than the service I actually deliver.',
      'Some parts represent me well, but other parts feel outdated, inconsistent, DIY or no longer reflective of where my business is now.',
      'My business presence is credible overall, but it does not yet fully communicate the quality, experience or value I provide.',
      'My business presence reflects the quality of my service well and gives potential clients a professional first impression.',
      'My business presence strongly reinforces the quality and positioning of my service, making the value of working with me clear before we speak.'
    ]
  },
  {
    category: 'Credibility',
    text: 'What evidence can potential clients see that shows you are good at what you do?',
    answers: [
      'Very little or none; most of the evidence exists only in private conversations or past client experiences.',
      'I have some positive feedback or examples, but they are limited, informal, outdated or difficult to find.',
      'I show some useful proof, such as testimonials, reviews, examples of work, credentials or results, but there are gaps.',
      'Potential clients can easily find relevant, current evidence that supports the quality of my work and the claims I make.',
      'I use strong, specific and varied proof throughout my business presence to demonstrate experience, outcomes and client confidence.'
    ]
  },
  {
    category: 'Credibility',
    text: 'How consistent does your business appear across the different places a potential client might encounter it?',
    answers: [
      'It is noticeably inconsistent; information, branding, messaging or service details vary significantly between places.',
      'There are several inconsistencies or outdated elements that could create confusion or make the business feel less established.',
      'The overall picture is reasonably consistent, although some touchpoints do not fully match or feel equally professional.',
      'My key touchpoints are consistent in their information, messaging and overall standard.',
      'Every major touchpoint feels connected and intentional, creating a cohesive and recognisable experience from first discovery onwards.'
    ]
  },
  {
    category: 'Credibility',
    text: 'Before speaking to you personally, how much can a potential client learn that would help them feel confident about choosing your business?',
    answers: [
      'Very little; I usually need to explain my value, answer basic questions and build trust personally from the beginning.',
      'They can find some information, but I still need to do most of the explaining and reassurance myself.',
      'They can understand the basics and see some reasons to trust me, although important questions or concerns may remain unanswered.',
      'They can learn enough about my approach, expertise, services and credibility to feel well informed before making contact.',
      'My business presence actively builds trust before we speak by answering key questions, demonstrating expertise and giving strong reasons to choose me.'
    ]
  },
  {
    category: 'Profitability',
    text: 'When someone becomes interested in working with you, how clear is their next step?',
    answers: [
      'There is no clear next step; people generally need to work out for themselves how to proceed.',
      'A next step exists, but it may be vague, inconsistent or difficult to find.',
      'People can usually find a way to contact me or enquire, although the journey could be clearer or more intentional.',
      'There is a clear and easy next step that matches how I want potential clients to engage with my business.',
      'I have a deliberate client journey with clear calls to action that guide different potential clients towards the most appropriate next step.'
    ]
  },
  {
    category: 'Profitability',
    text: 'How easy is it for a potential client to enquire, book or take the next step at a time that suits them?',
    answers: [
      'It is difficult; they may need to wait for me to be available, send a general message or work out how to contact me.',
      'They can contact me, but the process involves unnecessary friction, delays or back-and-forth.',
      'The process works reasonably well, although there are still points where potential clients may hesitate, wait or drop away.',
      'It is straightforward for potential clients to enquire, book or take the appropriate next step without unnecessary friction.',
      'The process is intentionally designed around the client journey, making it simple to act while giving them the information and reassurance they need.'
    ]
  },
  {
    category: 'Profitability',
    text: 'What happens when someone is interested in your business but is not ready to buy yet?',
    answers: [
      'Usually nothing; if they leave without enquiring or buying, I have no reliable way to continue the relationship.',
      'They may follow me on social media or remember me, but I have no consistent process for staying connected.',
      'I have at least one way to stay connected, such as email, social media or follow-up, but it is not used consistently or strategically.',
      'I have a consistent way to continue building the relationship with interested people who are not ready to buy immediately.',
      'I have a deliberate nurture process that keeps potential clients engaged, builds trust over time and creates future opportunities to buy.'
    ]
  },
  {
    category: 'Profitability',
    text: 'How much of the work of turning interest into an enquiry depends on you personally?',
    answers: [
      'Almost all of it; I usually need to explain what I do, answer basic questions, build trust and guide people towards the next step myself.',
      'A lot of it; potential clients can find some information, but I still do most of the explaining, reassuring and following up personally.',
      'It is fairly balanced; my business presence does some of the work, but I still regularly need to fill important information or trust gaps myself.',
      'My business presence does much of the early work by informing, reassuring and guiding potential clients before I become personally involved.',
      'My client journey is designed to build understanding and trust before direct contact, so my personal time is focused mainly on qualified conversations and delivering the service.'
    ]
  }
];

const overallResults = {
  lower: {
    name: 'Hidden Potential',
    paragraphs: [
      'Your business may be delivering far more value than people can currently see.',
      'Your results suggest there are important gaps in how potential clients discover your business, build confidence in what you offer, or move from interest to action. That can leave a good business working harder than it should for attention, trust and enquiries.',
      'The opportunity here is not to change everything at once. It is to identify the areas creating the most friction and strengthen them in the right order.',
      'Your category breakdown below shows where to focus first.'
    ]
  },
  middle: {
    name: 'Building Momentum',
    paragraphs: [
      'You have foundations to build on, but some parts of your business are working harder than others.',
      'Your results suggest potential clients can already find reasons to notice, trust or engage with your business, but gaps in the journey may be limiting your momentum. You may be visible without converting enough interest, credible without being easy to discover, or attracting attention without a clear way to continue the relationship.',
      'This is often the stage where focused improvements make a meaningful difference. Rather than doing more everywhere, the priority is to strengthen the areas most likely to be holding back your next stage of growth.',
      'Your category breakdown below shows where the clearest opportunities sit.'
    ]
  },
  higher: {
    name: 'Ready to Elevate',
    paragraphs: [
      'Your business has strong foundations and is well positioned for its next stage of growth.',
      'Your results suggest you have already built many of the elements that help potential clients discover your business, trust what they find and take meaningful next steps. The focus now is less about fixing the basics and more about refining what works, closing remaining gaps and making your business presence work harder for you.',
      'A strong overall score does not mean every area is equally strong. Your category breakdown below highlights where further improvement could create the greatest return.'
    ]
  }
};

const categoryResults = {
  Visibility: {
    lower: {
      indication: 'Your business may currently depend heavily on referrals, word of mouth, existing relationships or your own direct efforts to stay visible. New potential clients may struggle to discover you consistently, understand what you do quickly, or find a clear and current picture of your business when they search for you.',
      why: 'A strong service cannot generate opportunities if too few of the right people encounter it. When visibility is limited or inconsistent, growth can become unpredictable. You may find yourself repeatedly starting from zero: posting when work is quiet, relying on recommendations, or personally chasing the next opportunity.',
      actions: [
        ['Choose your most relevant discovery channels.', 'Identify the two or three places your ideal clients are genuinely likely to look for a service like yours. Focus there rather than trying to be everywhere.'],
        ['Make your offer immediately clear.', 'Review your key profiles and business touchpoints. A new visitor should quickly understand what you do, who you help and what problem you solve.'],
        ['Create one reliable place to find you.', 'Make sure potential clients can find accurate, current information about your business without piecing it together from scattered posts or outdated profiles.']
      ]
    },
    middle: {
      indication: 'Your business has some visibility, but discovery may still be inconsistent or overly dependent on particular channels. People can find you, but perhaps not often enough, not always in the right places, or without some effort to understand exactly what you offer.',
      why: 'Inconsistent visibility creates inconsistent opportunity. You may already be doing useful marketing, but if your activity is fragmented, irregular or unclear, you can spend considerable time showing up without building sustained momentum.',
      actions: [
        ['Identify what is already creating discovery.', 'Look at where recent enquiries, clients and conversations actually came from. Strengthen proven channels before adding new ones.'],
        ['Improve consistency between touchpoints.', 'Make sure your website, social profiles, listings and other key channels reinforce the same clear message about what you do and who you help.'],
        ['Build visibility that lasts beyond individual posts.', 'Add more durable ways to be discovered, such as useful website content, search visibility, local listings, partnerships, directories or an email audience.']
      ]
    },
    higher: {
      indication: 'Your business has strong visibility foundations. You are showing up in relevant places, potential clients can understand what you do, and people who hear about you can find useful information without unnecessary effort.',
      why: 'Strong visibility creates more opportunities to be considered, remembered and recommended. The next challenge is making sure increased attention is attracting the right people and leading somewhere commercially useful.',
      actions: [
        ['Measure quality, not just reach.', 'Identify which channels bring relevant enquiries and valuable clients rather than focusing only on views, followers or traffic.'],
        ['Strengthen your highest-performing channels.', 'Invest more deliberately in the places already proving effective instead of continually expanding into new ones.'],
        ['Connect visibility to a clear next step.', 'Make sure every major discovery channel guides interested people towards an appropriate action, whether that is exploring a service, joining your email list, booking or enquiring.']
      ]
    }
  },
  Credibility: {
    lower: {
      indication: 'There may be a gap between the quality of the service you provide and the impression your business currently creates. Potential clients may find limited proof, inconsistent information, outdated touchpoints or too little detail to feel confident before speaking to you personally.',
      why: 'People often decide whether a business feels credible before making contact. If your business presence does not reflect the standard of your actual work, you may be losing opportunities before you know they existed. You may also find yourself repeatedly explaining, reassuring and proving your value in individual conversations.',
      actions: [
        ['Close the gap between your service and its presentation.', 'Review your main client-facing touchpoints and identify anything outdated, inconsistent or no longer representative of the business you run today.'],
        ['Make your proof visible.', 'Gather and display relevant testimonials, reviews, examples, results, credentials or case studies where potential clients can easily find them.'],
        ['Answer trust questions before they are asked.', 'Provide clear information about your services, process, experience and what clients can expect from working with you.']
      ]
    },
    middle: {
      indication: 'Your business already gives potential clients reasons to trust you, but the picture may not yet feel fully consistent or convincing. Some touchpoints may represent you strongly while others feel less polished, less current or less informative. You may have good proof, but not use it as effectively as you could.',
      why: 'Trust is cumulative. A strong testimonial can be undermined by outdated information. A professional social presence can lose impact if the next step feels unclear or inconsistent. Small gaps across the client journey can create hesitation even when the underlying service is excellent.',
      actions: [
        ['Audit the full trust journey.', 'Look at your business through the eyes of someone encountering it for the first time, from initial discovery through to enquiry.'],
        ['Strengthen the specificity of your proof.', 'Prioritise testimonials, examples and case studies that show what changed, who you helped and why the experience mattered.'],
        ['Bring weaker touchpoints up to standard.', 'Identify where the experience becomes inconsistent and focus on closing those gaps before adding more marketing activity.']
      ]
    },
    higher: {
      indication: 'Your business creates a strong and credible impression. Potential clients can find clear information, relevant evidence and consistent reasons to trust the quality of what you offer before speaking to you directly.',
      why: 'Strong credibility reduces uncertainty and makes buying decisions easier. It can also support stronger positioning, better-fit enquiries and less dependence on repeatedly proving your value in one-to-one conversations.',
      actions: [
        ['Turn proof into a strategic asset.', 'Go beyond collecting testimonials. Build stronger case studies, outcome-led examples and proof tailored to the clients you most want to attract.'],
        ['Keep credibility current.', 'Regularly review your key touchpoints so your business presence continues to reflect your latest work, experience and positioning.'],
        ['Use trust to strengthen your market position.', 'Look for opportunities to communicate not only that you are credible, but why your approach is distinct and particularly valuable to the right client.']
      ]
    }
  },
  Profitability: {
    lower: {
      indication: 'Your business may be generating interest without having a reliable system for turning that interest into action. Potential clients may be unsure what to do next, encounter friction when trying to enquire or book, or disappear entirely if they are not ready to buy immediately. Much of the work of converting interest may currently depend on you personally.',
      why: 'Attention alone does not create growth. When the route from interest to action is unclear, good opportunities can quietly disappear. This can lead to more time spent chasing leads, answering repetitive questions and continually finding new people to replace those who were not ready the first time.',
      actions: [
        ['Define one clear next step.', 'Decide what you most want an interested potential client to do and make that action obvious across your key touchpoints.'],
        ['Remove unnecessary friction.', 'Test your own enquiry or booking journey. Reduce avoidable delays, unclear instructions and unnecessary back-and-forth.'],
        ['Create a way to continue the relationship.', 'Give interested people who are not ready to buy a reason to stay connected, ideally through an email list or another channel you can use consistently.']
      ]
    },
    middle: {
      indication: 'Your business has some effective routes from interest to action, but parts of the client journey may still be leaking opportunities. People can enquire or engage, yet the process may not always be clear, consistent or designed around different levels of readiness. You may still be personally carrying too much of the work required to turn interest into a qualified conversation.',
      why: 'Small points of friction become expensive over time. If potential clients hesitate, wait, become confused or leave without a way to stay connected, you need more visibility just to replace lost opportunities. Improving the journey can help existing attention work harder before you invest in attracting more of it.',
      actions: [
        ['Map the journey from discovery to enquiry.', 'Identify every step a potential client takes and look for points where they may become uncertain, delayed or lost.'],
        ['Match calls to action to readiness.', 'Not everyone is ready to enquire immediately. Create appropriate next steps for people who are ready now and those who need more time.'],
        ['Reduce repeated manual explanation.', 'Identify the questions, concerns and information you repeatedly handle personally, then build the most useful answers into your client journey.']
      ]
    },
    higher: {
      indication: 'Your business has a strong foundation for turning interest into meaningful action. Potential clients can identify appropriate next steps, move through the journey with limited friction and build confidence before requiring significant personal input from you.',
      why: 'A well-designed client journey helps your existing visibility and credibility produce more commercial value. It also protects your time by allowing your business presence and systems to handle more of the early education, reassurance and guidance.',
      actions: [
        ['Measure where the strongest opportunities convert.', 'Track which channels, pages, offers and calls to action lead to valuable enquiries rather than simply activity.'],
        ['Refine for different levels of readiness.', 'Strengthen the journey for people ready to buy now while continuing to nurture those who may become clients later.'],
        ['Optimise the highest-value friction points.', 'Look for smaller improvements in enquiry quality, qualification, follow-up and conversion rather than rebuilding a journey that already works well.']
      ]
    }
  }
};

const priorityResults = {
  Visibility: ['Your clearest opportunity: strengthen discovery', [
    'Your results suggest the first priority is helping more of the right people find and understand your business.',
    'Before adding more offers or trying to improve conversion further, focus on creating a clearer and more consistent route for potential clients to discover you, recognise that your service is relevant to them and explore what you offer.',
    'Your existing strengths in Credibility and/or Profitability give you something valuable to build on. The opportunity now is to make sure more of the right people reach them.'
  ]],
  Credibility: ['Your clearest opportunity: strengthen trust', [
    'Your results suggest the first priority is closing the gap between the quality of your service and the confidence your business presence creates.',
    'Potential clients may already be discovering you, but stronger proof, clearer information and a more consistent experience could help more of them feel confident enough to continue.',
    'The goal is not simply to look more polished. It is to make the value, experience and trustworthiness already present in your business easier to see.'
  ]],
  Profitability: ['Your clearest opportunity: turn more interest into action', [
    'Your results suggest the first priority is improving what happens after someone becomes interested.',
    'You may not need more attention before making better use of the attention you already have. Clearer next steps, less friction and a stronger way to nurture people who are not ready immediately could help more opportunities progress rather than quietly disappear.',
    'The goal is to make the journey easier for potential clients while reducing how much of the early explanation, reassurance and follow-up depends on you personally.'
  ]],
  'Visibility+Credibility': ['Your clearest opportunity: become easier to find and easier to trust', [
    'Your results suggest discovery and trust need to strengthen together.',
    'Increasing visibility alone may have limited impact if potential clients do not quickly understand or trust what they find. Equally, a highly credible business presence cannot create enough opportunity if too few of the right people reach it.',
    'Focus first on building a clear, consistent presence that helps potential clients both discover your business and feel confident exploring further.'
  ]],
  'Visibility+Profitability': ['Your clearest opportunity: connect discovery to action', [
    'Your results suggest the journey needs strengthening at both ends: helping more of the right people find you and giving interested people a clearer route forward.',
    'The priority is not simply more marketing. It is creating a connected path from discovery to meaningful action, so increased attention has somewhere useful to go.',
    'Focus on the channels most relevant to your ideal clients, then make the next step obvious once they arrive.'
  ]],
  'Credibility+Profitability': ['Your clearest opportunity: build confidence and make action easier', [
    'Your results suggest potential clients need more support between becoming interested and feeling ready to take the next step.',
    'Stronger proof, clearer information and a more consistent experience can reduce uncertainty. A simpler enquiry or nurture journey can then help interested people act when the time is right.',
    'Focus on removing both trust gaps and practical friction from the client journey.'
  ]],
  'Visibility+Credibility+Profitability': ['Your clearest opportunity: strengthen the full client journey', [
    'Your results are relatively balanced across Visibility, Credibility and Profitability.',
    'That means there is no single category clearly responsible for holding the others back. The best approach is to strengthen the journey as a whole: how people discover you, what helps them trust you and what happens when they become interested.',
    'Start with the recommended actions that are simplest to implement and most relevant to your current business goals.'
  ]]
};

const ctaResults = {
  Visibility: ['What if your website helped more of the right people find you?', [
    'A strategically built website can give your business a clear, credible home, strengthen how you are discovered and help potential clients quickly understand why your service is relevant to them.',
    'And it does not have to sit online waiting to be found.',
    'The scorecard you have just completed is one example of how a website can actively support business growth: creating useful content, attracting potential clients and turning attention into an ongoing relationship.',
    'If your current online presence is making your business harder to discover than it should be, I can help you explore what a stronger website could do.'
  ]],
  Credibility: ['Does your website reflect the quality of the business you have built?', [
    'A strong service can be undermined by an online presence that feels outdated, unclear or disconnected from the standard of the actual client experience.',
    'Strategic website design is not simply about making a business look more polished. It is about helping potential clients understand your value, see evidence, answer key questions and build confidence before they ever contact you.',
    'The scorecard you have just completed is itself an example of that thinking: your website can demonstrate expertise while creating a useful experience for the people you want to reach.',
    'If your current website no longer represents the business you run today, I can help you change that.'
  ]],
  Profitability: ['What if your website did more than explain what you do?', [
    'A strategically built website can guide potential clients towards the right next step, capture leads who are not ready to buy yet and reduce how much early explanation and reassurance depends on you personally.',
    'You have just experienced one example.',
    'This scorecard is not simply content on a page. It is a built-in lead generation journey designed to provide value, capture interest and continue the relationship beyond a single visit.',
    'Your website could include functionality shaped around your own business, whether that is a quiz, assessment, lead magnet, enquiry journey, booking route or another useful interactive experience.',
    'If you want a website that actively supports how your business generates and develops opportunities, I can help you build it.'
  ]],
  tie: ['Your website could work harder across the client journey', [
    'Your results suggest more than one part of the journey deserves attention.',
    'A strategically designed website can connect those pieces: helping the right people understand your business, building confidence in what you offer and guiding interested visitors towards an appropriate next step.',
    'The scorecard you have just completed is one example of that approach. Rather than simply displaying information, it provides a useful experience, captures interest and creates a route for the relationship to continue.',
    'If you want to explore what a more strategic website could do for your business, I can help.'
  ]],
  all: ['Build a website around the business you want to grow', [
    'Your results show a relatively balanced profile across Visibility, Credibility and Profitability.',
    'A strategically designed website can support all three: creating a clear home for your business, strengthening trust and giving potential clients purposeful ways to take the next step.',
    'The scorecard you have just completed is one example of how website functionality can become part of a wider growth strategy rather than simply sitting online as a digital brochure.',
    'If you want to explore what that could look like for your business, I can help.'
  ]]
};

const landing = document.querySelector('[data-scorecard-landing]');
const quizView = document.querySelector('[data-quiz-view]');
const resultsView = document.querySelector('[data-results-view]');
const standardFooter = document.querySelector('[data-standard-footer]');
const accessForm = document.querySelector('[data-access-form]');
const accessStatus = document.querySelector('[data-access-status]');
const nameInput = document.querySelector('#scorecard-name');
const emailInput = document.querySelector('#scorecard-email');
const consentInput = document.querySelector('#scorecard-consent');
const accessSubmit = accessForm?.querySelector('button[type="submit"]');
const questionForm = document.querySelector('[data-question-form]');
const questionText = document.querySelector('[data-question-text]');
const answerList = document.querySelector('[data-answer-list]');
const previousButton = document.querySelector('[data-previous-question]');
const nextButton = document.querySelector('[data-next-question]');
const questionStatus = document.querySelector('[data-question-status]');
const progressLabel = document.querySelector('[data-progress-label]');
const progressTrack = document.querySelector('[data-progress-track]');
const progressBar = document.querySelector('[data-progress-bar]');
const categoryLabel = document.querySelector('[data-category-label]');
const categoryResultsContainer = document.querySelector('[data-category-results]');
const restartButton = document.querySelector('[data-restart-scorecard]');

const state = {
  name: '',
  email: '',
  currentQuestion: 0,
  answers: Array(questions.length).fill(null)
};

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const syncAccessButton = () => {
  if (!accessSubmit) return;
  const ready = Boolean(nameInput.value.trim()) && emailInput.validity.valid && consentInput.checked;
  accessSubmit.disabled = !ready;
};

[nameInput, emailInput].forEach((input) => input?.addEventListener('input', syncAccessButton));
consentInput?.addEventListener('change', syncAccessButton);

const showQuiz = () => {
  landing.hidden = true;
  resultsView.hidden = true;
  quizView.hidden = false;
  standardFooter.hidden = true;
  document.body.classList.add('quiz-active');
  window.scrollTo({ top: 0, behavior: 'auto' });
  renderQuestion();
};

accessForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!accessForm.checkValidity()) {
    accessForm.reportValidity();
    return;
  }

  state.name = nameInput.value.trim();
  state.email = emailInput.value.trim();
  accessStatus.textContent = '';
  showQuiz();
});

const renderQuestion = () => {
  const question = questions[state.currentQuestion];
  const answered = state.answers[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;

  categoryLabel.textContent = question.category;
  progressLabel.textContent = `Question ${state.currentQuestion + 1} of ${questions.length}`;
  progressTrack.setAttribute('aria-valuenow', String(state.currentQuestion + 1));
  progressBar.style.width = `${progress}%`;
  questionText.textContent = question.text;
  questionText.tabIndex = -1;
  questionStatus.textContent = '';

  answerList.innerHTML = question.answers.map((answer, score) => `
    <label class="answer-option">
      <input type="radio" name="answer" value="${score}" ${answered === score ? 'checked' : ''}>
      <span class="answer-marker" aria-hidden="true"></span>
      <span>${answer}</span>
    </label>
  `).join('');

  nextButton.disabled = answered === null;
  nextButton.innerHTML = state.currentQuestion === questions.length - 1
    ? 'See my result <span aria-hidden="true">→</span>'
    : 'Continue <span aria-hidden="true">→</span>';
  previousButton.hidden = state.currentQuestion === 0;

  answerList.querySelectorAll('input').forEach((input) => {
    input.addEventListener('change', () => {
      state.answers[state.currentQuestion] = Number(input.value);
      nextButton.disabled = false;
      questionStatus.textContent = '';
    });
  });

  window.requestAnimationFrame(() => questionText.focus({ preventScroll: true }));
};

previousButton?.addEventListener('click', () => {
  if (state.currentQuestion === 0) return;
  state.currentQuestion -= 1;
  renderQuestion();
});

questionForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const selected = questionForm.querySelector('input[name="answer"]:checked');
  if (!selected) {
    questionStatus.textContent = 'Choose the statement that feels closest to your business before continuing.';
    answerList.querySelector('input')?.focus();
    return;
  }

  state.answers[state.currentQuestion] = Number(selected.value);
  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion += 1;
    renderQuestion();
    return;
  }

  showResults();
});

const overallBand = (score) => {
  if (score <= 19) return 'lower';
  if (score <= 35) return 'middle';
  return 'higher';
};

const categoryBand = (score) => {
  if (score <= 5) return 'lower';
  if (score <= 11) return 'middle';
  return 'higher';
};

const paragraphMarkup = (paragraphs) => paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');

const renderCategoryResult = (category, score, isPriority) => {
  const band = categoryBand(score);
  const content = categoryResults[category][band];
  const actions = content.actions.map(([title, detail], index) => `
    <li>
      <span>${String(index + 1).padStart(2, '0')}</span>
      <p><strong>${title}</strong>${detail}</p>
    </li>
  `).join('');

  return `
    <article class="category-result ${isPriority ? 'is-priority' : ''}">
      <header>
        <div>
          <p>${band} range ${isPriority ? '· Priority area' : ''}</p>
          <h3>${category}</h3>
        </div>
        <div class="category-score"><strong>${score}</strong><span>/ 16</span></div>
      </header>
      <div class="category-analysis">
        <section><h4>What your score indicates</h4><p>${content.indication}</p></section>
        <section><h4>Why it matters</h4><p>${content.why}</p></section>
      </div>
      <div class="recommended-actions">
        <h4>Recommended actions</h4>
        <ol>${actions}</ol>
      </div>
    </article>
  `;
};

const showResults = () => {
  const categories = ['Visibility', 'Credibility', 'Profitability'];
  const scores = Object.fromEntries(categories.map((category) => [
    category,
    state.answers.reduce((total, score, index) => total + (questions[index].category === category ? score : 0), 0)
  ]));
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const overall = overallResults[overallBand(total)];
  const minimum = Math.min(...Object.values(scores));
  const priorities = categories.filter((category) => scores[category] === minimum);
  const priorityKey = priorities.join('+');
  const priority = priorityResults[priorityKey];
  const ctaKey = priorities.length === 3 ? 'all' : priorities.length === 2 ? 'tie' : priorities[0];
  const cta = ctaResults[ctaKey];

  document.querySelector('[data-results-greeting]').textContent = `${state.name}, your result is`;
  document.querySelector('[data-result-name]').textContent = overall.name;
  document.querySelector('[data-result-score]').textContent = `${total}/48`;
  document.querySelector('[data-overall-assessment]').innerHTML = paragraphMarkup(overall.paragraphs);

  categoryResultsContainer.innerHTML = categories
    .map((category) => renderCategoryResult(category, scores[category], priorities.includes(category)))
    .join('');

  document.querySelector('[data-priority-content]').innerHTML = `<h2>${priority[0]}</h2>${paragraphMarkup(priority[1])}`;
  document.querySelector('[data-cta-content]').innerHTML = `<p class="cta-kicker">A more strategic website</p><h2>${cta[0]}</h2>${paragraphMarkup(cta[1])}`;

  quizView.hidden = true;
  resultsView.hidden = false;
  document.body.classList.remove('quiz-active');
  window.scrollTo({ top: 0, behavior: 'auto' });
  resultsView.focus({ preventScroll: true });
};

restartButton?.addEventListener('click', () => {
  state.currentQuestion = 0;
  state.answers.fill(null);
  showQuiz();
});
