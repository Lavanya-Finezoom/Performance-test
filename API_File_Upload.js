import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 20, duration: '1m' },
        { target: 20, duration: '3m30s' },
        { target: 0, duration: '1m' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('page_1 - https://practice.expandtesting.com/upload', function () {
    response = http.get('https://practice.expandtesting.com/upload', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.5)

    response = http.get('https://practice.expandtesting.com/assets/css/main.css?v=99452296', {
      headers: {
        'if-modified-since': 'Tue, 16 Jan 2024 12:03:39 GMT',
        'if-none-match': 'W/"102d-18d1227dd78"',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://practice.expandtesting.com/assets/images/logo.svg', {
      headers: {
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://practice.expandtesting.com/js/vendor/dropzone.js', {
      headers: {
        'if-modified-since': 'Tue, 16 Jan 2024 12:03:39 GMT',
        'if-none-match': 'W/"f626-18d1227dd78"',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://practice.expandtesting.com/assets/plugins/back-to-top/back-to-top.min.js',
      {
        headers: {
          'if-modified-since': 'Tue, 16 Jan 2024 12:03:39 GMT',
          'if-none-match': 'W/"b68-18d1227dd78"',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://practice.expandtesting.com/assets/js/main.js', {
      headers: {
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://practice.expandtesting.com/socket.io/socket.io.min.js', {
      headers: {
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.7)

    response = http.get(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQxlw',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://practice.expandtesting.com/assets/images/favicon.png', {
      headers: {
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQxps&sid=KocJV45ChmsK07QTABLZ',
      '40',
      {
        headers: {
          accept: '*/*',
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQxpw&sid=KocJV45ChmsK07QTABLZ',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQxtv&sid=KocJV45ChmsK07QTABLZ',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQxtx&sid=KocJV45ChmsK07QTABLZ',
      '42["pageChange",{"page":"https://practice.expandtesting.com/upload"}]',
      {
        headers: {
          accept: '*/*',
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQxxt&sid=KocJV45ChmsK07QTABLZ',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(5.9)

    response = http.post('https://practice.expandtesting.com/upload', null, {
      headers: {
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarydipiOzBd8AJ8fe0z',
        origin: 'https://practice.expandtesting.com',
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://practice.expandtesting.com/assets/css/main.css?v=99452296', {
      headers: {
        'if-modified-since': 'Tue, 16 Jan 2024 12:03:39 GMT',
        'if-none-match': 'W/"102d-18d1227dd78"',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://practice.expandtesting.com/assets/images/logo.svg', {
      headers: {
        'if-modified-since': 'Tue, 16 Jan 2024 12:03:39 GMT',
        'if-none-match': 'W/"84c-18d1227dd78"',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://practice.expandtesting.com/assets/plugins/back-to-top/back-to-top.min.js',
      {
        headers: {
          'if-modified-since': 'Tue, 16 Jan 2024 12:03:39 GMT',
          'if-none-match': 'W/"b68-18d1227dd78"',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://practice.expandtesting.com/assets/js/main.js', {
      headers: {
        'if-modified-since': 'Tue, 16 Jan 2024 12:03:39 GMT',
        'if-none-match': 'W/"5c6-18d1227dd78"',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://practice.expandtesting.com/socket.io/socket.io.min.js', {
      headers: {
        'if-none-match': '"4.6.1"',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.6)

    response = http.get(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQzal',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQzen&sid=h__173jXkfnHaHUVABLg',
      '40',
      {
        headers: {
          accept: '*/*',
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQzep&sid=h__173jXkfnHaHUVABLg',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQzin&sid=h__173jXkfnHaHUVABLg',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQzio&sid=h__173jXkfnHaHUVABLg',
      '42["pageChange",{"page":"https://practice.expandtesting.com/upload"}]',
      {
        headers: {
          accept: '*/*',
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://practice.expandtesting.com/socket.io/?EIO=4&transport=polling&t=OqRQzmr&sid=h__173jXkfnHaHUVABLg',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })
}



// import { check } from 'k6'
// import http from 'k6/http'

// export const options = {}

// // For demo purpose, we'll generate a random binary file,
// // but you can also use a file from your local system:
// // const binFile = open('/path/to/file.bin', 'b');
// const binFile = open('assets/metric_browser_data_received.csv', 'b');

// export default function () {
//   const data = {
//     field: 'this is a standard form field',
//     file: http.file(binFile, 'test.bin', 'application/octet-stream'),
//   }

//   const res = http.post('https://practice.expandtesting.com/upload', data)
//   check(res, {
//     'is status 200': (r) => r.status === 200,
//   })
// }
