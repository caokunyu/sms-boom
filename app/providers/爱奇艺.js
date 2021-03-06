const Provider = require('../provider');
const utils = require('../utils');

module.exports = class extends Provider {
  constructor() {
    super();
    this.url = 'http://www.iqiyi.com/iframe/loginreg?is_reg=1&';
  }
  async resolve(ctx) {
    const options = ctx.options;
    const page = ctx.page;

    const $mobile = await page.$('input[data-regbox="name"]');

    if ($mobile) {
      await $mobile.click();
      await page.type(options.phone, { delay: 100 });
    }

    await utils.sleep(2000);

    await page.click('[rseat="prgd_smsbtn"]', { button: 'left' });
  }
};
