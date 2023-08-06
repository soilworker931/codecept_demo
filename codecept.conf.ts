import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*_test.ts',
  output: './output',
  timeout: 400,
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
      output: "./output"
    }
  },
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.amazon.pl',
      show: true,
      waitForTimeout: 40000,
      video: true,
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'codecept_demo'
}