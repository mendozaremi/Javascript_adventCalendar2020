/* --- Day 1: Report Repair ---

After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island.
 Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars.
None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first.
Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456

In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

// Naive solution
const reportRepair = (reports) => {
  for (let i = 0; i < reports.length; i++) {
    for (let j = i + 1; j < reports.length; j++) {
      for(let k = j + 1; k < reports.length; k++)
      if (reports[i] + reports[j] + reports[k] === 2020) {
        return reports[i] * reports[j] + reports[k];
      }
    }
  }
};

console.log(
  `this is the two numbers that sum to 2020 multiplied ${reportRepair(reports)}`
);

// puzzle input
let reports = [
  1945,
  2004,
  1520,
  1753,
  1463,
  1976,
  1994,
  1830,
  1942,
  1784,
  1858,
  1841,
  1721,
  1480,
  1821,
  1584,
  978,
  1530,
  1278,
  1827,
  889,
  1922,
  1996,
  1992,
  1819,
  1847,
  2010,
  2002,
  210,
  1924,
  1482,
  1451,
  1867,
  1364,
  1578,
  1623,
  1117,
  1594,
  1476,
  1879,
  1797,
  1952,
  2005,
  1734,
  1898,
  1880,
  ,
  1330,
  1854,
  1813,
  1926,
  1686,
  1286,
  1808,
  1876,
  1366,
  1995,
  1632,
  1699,
  2001,
  1365,
  1343,
  1979,
  1868,
  1815,
  820,
  1966,
  1888,
  1916,
  1852,
  1932,
  1368,
  1606,
  1825,
  1731,
  1980,
  1990,
  1818,
  1702,
  1419,
  1897,
  1970,
  1276,
  1914,
  1889,
  1953,
  1588,
  1958,
  1310,
  1391,
  1326,
  1131,
  1959,
  1844,
  1307,
  1998,
  1961,
  1708,
  1977,
  1886,
  1946,
  1516,
  1999,
  1859,
  1931,
  1853,
  1265,
  1869,
  1642,
  1740,
  1467,
  1944,
  1956,
  1263,
  1940,
  1912,
  1832,
  1872,
  1678,
  1319,
  1839,
  1689,
  1765,
  1894,
  1242,
  ,
  1983,
  1410,
  1985,
  1387,
  1022,
  1358,
  860,
  112,
  1964,
  1836,
  1838,
  1285,
  1943,
  1718,
  1351,
  760,
  1925,
  1842,
  1921,
  1967,
  1822,
  1978,
  1837,
  1378,
  1618,
  1266,
  2003,
  1972,
  666,
  1321,
  1938,
  1616,
  1892,
  831,
  1865,
  1314,
  1571,
  1806,
  1225,
  1882,
  1454,
  1257,
  1381,
  1284,
  1907,
  1950,
  1887,
  1492,
  1934,
  1709,
  1315,
  1574,
  1794,
  1576,
  1883,
  1864,
  1981,
  1317,
  1397,
  1325,
  1620,
  1895,
  1485,
  1828,
  1803,
  1715,
  1374,
  1251,
  1460,
  1863,
  1581,
  1499,
  1933,
  1982,
  1809,
  1812,
];
