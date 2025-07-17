const responses = {
    tired: "Even 10 minutes of effort can make a difference — then you can rest proud!",
    exhausted: "You’ve come far. A short break is okay — but don’t stop completely!",
    weak: "You are stronger than you think. This is the moment to prove it.",
    "i'm tired": "Even 10 minutes of effort can make a difference — then you can rest proud!",
    "i'll do it later": "Later becomes never. Start small, start now.",
    "i don't have time": "Everyone has 24 hours. Prioritize progress, not perfection.",
    "i'm not smart enough": "No one starts smart. Growth comes from trying.",
    "i can't focus": "Try 5 minutes. Just start — focus follows action.",
    "i’m not in the mood": "Moods follow action, not the other way around. Start anyway.",
    "i failed before": "Failure is a part of the process. Stand up stronger this time!",
    sad: "It’s okay to feel sad. But remember — you’ve survived 100% of your bad days.",
    bored: "Boredom is a signal to create something. Start a tiny challenge!",
    done: "You’re not done yet — you’re just getting started. One small step!",
    lonely: "You’re not alone. You’ve got this, and people care more than you know.",
    hopeless: "Hope is like the sun — it’s always there, even behind clouds.",
    happy: "That’s amazing! Keep spreading your happiness and use that energy to uplift others!",
    excited: "Ride that excitement and take the first step towards your dream!",
    motivated: "Stay in that flow! It’s your moment to shine 🌟",
    nervous: "Nerves mean you care. Channel them into action — you’ve got this!",
    scared: "Courage isn’t the absence of fear, it’s action in spite of it.",
    anxious: "Take a deep breath. You’re in control, one step at a time.",
    lazy: "You’re not lazy — maybe just uninspired. Do one thing that excites you!",
    procrastinating: "Perfection is the enemy of progress. Just begin — the rest will follow.",
    angry: "It's okay to feel angry. But don’t let it control your actions — breathe and reset."
};

const recommendations = {
    tired: "Try a quick 5-minute stretch or walk. Sometimes movement brings energy.",
    exhausted: "Take a short nap or drink water. Then tackle just one small task.",
    weak: "Remind yourself of a time you were strong — repeat it today.",
    sad: "Watch a feel-good video, talk to a friend, or go for a walk outside.",
    bored: "Learn something new online or try doodling — creativity boosts mood!",
    done: "Take 10 minutes of quiet reflection and then plan your next small move.",
    lonely: "Call a loved one or write your feelings in a journal. It helps.",
    hopeless: "Write down 3 small wins you've had before — proof that you’ve pushed through.",
    angry: "Listen to calming music or take a walk outdoors. Let the steam out gently.",
    anxious: "Try box breathing: inhale for 4 sec, hold 4 sec, exhale 4 sec, hold 4 sec.",
    happy: "Spread your joy — message a friend, start a project, or journal your joy!",
    excited: "Convert excitement into action: begin something you’ve been dreaming of!",
    motivated: "Keep your momentum alive. Break a big goal into a tiny next step!",
    nervous: "Visualize success. Nervousness is energy — use it to push forward.",
    scared: "Talk to someone you trust or write down your fears to reduce their power.",
    procrastinating: "Use the 2-minute rule: if it takes less than 2 minutes, do it now!",
    lazy: "Start with one small task, even if it’s just making your bed — progress builds motivation."
};

const quotes = [
    "“The best way to get started is to quit talking and begin doing.” – Walt Disney",
    "“Push yourself, because no one else is going to do it for you.”",
    "“It always seems impossible until it's done.” – Nelson Mandela",
    "“Don’t watch the clock; do what it does. Keep going.” – Sam Levenson",
    "“Start where you are. Use what you have. Do what you can.” – Arthur Ashe",
    "“Your only limit is your mind.”",
    "“Success is what comes after you stop making excuses.”"
];

function bustExcuse() {
    const input = document.getElementById("excuseInput").value.toLowerCase().trim();

    let matchedResponse = null;
    let matchedRecommendation = null;

    for (const key in responses) {
        if (input.includes(key)) {
            matchedResponse = responses[key];
            matchedRecommendation = recommendations[key] || "Try to shift your energy with something small and uplifting!";
            break;
        }
    }

    const fallback = "That’s a unique feeling... but remember: you're capable of more than you know! 💫";
    const fallbackRec = "Try writing down your thoughts or talking to someone who supports you.";

    const message = matchedResponse || fallback;
    const suggestion = matchedRecommendation || fallbackRec;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("response").innerText = message;
    document.getElementById("quote").innerText = randomQuote;
    document.getElementById("recommendation").innerText = `👉 Suggestion: ${suggestion}`;
}
