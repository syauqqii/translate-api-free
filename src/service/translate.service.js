const axios = require('axios');

class TranslateService {
    static async Translate(text, source, target) {
        try {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;

            const response = await axios.get(url);
            const result = response.data;
        
            if (result && result[0]) {
                const translatedText = result[0]
                    .map((item) => item[0])
                    .join('');
                return translatedText;
            } else {
                throw new Error('No translation data found');
            }
        } catch (error) {
            throw new Error(error.message || 'Failed to fetch translation');
        }
    }
}

module.exports = TranslateService;