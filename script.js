const notes = {
    'ai-intro': `<h1>अध्याय १: AI को परिचय</h1><p>एआई भनेको मेसिनलाई मानिस जस्तै सोच्न सिकाउने प्रविधि हो। यसले डाटा पढेर निर्णय लिन्छ।</p>`,
    'ai-earning': `<h1>अध्याय २: AI बाट कमाई</h1><p>एआई प्रयोग गरेर तपाईँले कन्टेन्ट लेख्न, फोटो बनाउन र अनलाइन सेवा दिन सक्नुहुन्छ।</p>`,
    'yt-tips': `<h1>अध्याय ३: YouTube टिप्स</h1><p>भिडियो भाइरल बनाउन सही थम्बनेल र एआईले लेखेको स्क्रिप्ट प्रयोग गर्नुहोस्।</p>`
};

function loadNote(id) {
    document.getElementById('content-display').innerHTML = notes[id];
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
