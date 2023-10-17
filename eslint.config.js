import { vinicuncaESLint } from '@vinicunca/eslint-config';
import unocss from '@unocss/eslint-config/flat';

export default vinicuncaESLint({
  userConfigs: [
    unocss,
  ],
});
