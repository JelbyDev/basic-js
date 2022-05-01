const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let countDomains = {};
  domains.forEach((el) => {
    el.split(".")
      .reverse()
      .reduce((domain, el) => {
        domain += `.${el}`;
        countDomains.hasOwnProperty(domain)
          ? (countDomains[domain] += 1)
          : (countDomains[domain] = 1);

        return domain;
      }, "");
  });

  return countDomains;
}

module.exports = {
  getDNSStats,
};
