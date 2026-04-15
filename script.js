const notes = {
    'ai-intro': `
        <h1>अध्याय १: AI भनेको के हो?</h1>
        <p><b>AI (Artificial Intelligence)</b> भनेको कम्प्युटरलाई मानिस जस्तै सोच्न सिकाउने प्रविधि हो।</p>
        <p>यो कुनै जादु होइन, यो गणित र डाटाको खेल हो। यसले पुराना कुराहरूबाट सिकेर नयाँ निर्णय लिन सक्छ। यसले गर्दा तपाईँको काम १० गुणा छिटो हुन्छ।</p>`,
    
    'ai-earning': `
        <h1>अध्याय २: AI बाट पैसा कसरी कमाउने?</h1>
        <p>एआई प्रयोग गरेर पैसा कमाउने मुख्य ३ तरिकाहरू छन्:</p>
        <ul>
            <li><b>Content Creation:</b> ChatGPT प्रयोग गरेर स्क्रिप्ट लेख्ने।</li>
            <li><b>AI Graphics:</b> महँगो लोगो र फोटोहरू सेकेन्डभरमा बनाएर बेच्ने।</li>
            <li><b>Automation:</b> मान्छेले गर्ने काम एआईबाट अटोमेटिक गराएर पैसा बचाउने।</li>
        </ul>`,
    
    'yt-tips': `
        <h1>अध्याय ३: YouTube ग्रोथका गोप्य कुरा</h1>
        <p>भिडियो भाइरल बनाउन २ कुरा चाहिन्छ:</p>
        <p>१. <b>High CTR:</b> थम्बनेल पहेँलो र प्रष्ट हुनुपर्छ।</p>
        <p>२. <b>Retention:</b> भिडियोको सुरुमै मान्छेलाई बाँधेर राख्ने 'Hook' हुनुपर्छ।</p>`
};

function loadNote(id) {
    document.getElementById('content-display').innerHTML = notes[id];
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}
