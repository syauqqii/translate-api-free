const TranslateService = require("../service/translate.service");
const TranslateDTO = require("../dto/translate.dto");
const ResponseUtil = require("../utils/response.util");

class TranslateController {
    static async TranslateText(req, res) {
        try {
            const { valid, messages } = TranslateDTO.Check(req.body);

            if (!valid) return res.status(400).send(ResponseUtil.Error(messages.join(', '), 400));

            const { text, source, target } = req.body;
            const translate = await TranslateService.Translate(text, source, target);

            const data = { source, target, text, result: translate };
            return res.status(200).send(ResponseUtil.Success(data));
        } catch (error) {
            return res.status(500).send(ResponseUtil.Error((error.message || 'Translation failed'), 500));
        }
    }
}

module.exports = TranslateController;