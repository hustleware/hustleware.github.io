settings = {
  clock: {
    id: 'clock',
    timezone: 8
  }
}

clock(settings.clock.id, settings.clock.timezone);

function clock(e, t) {
  e = document.getElementById(e);
  try {
    return function n() {
      let h, m, s, d = new Date;
      d.setHours(d.getUTCHours() + t),
      h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
      m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
      s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds(),
      e.innerHTML = h + ':' + m + ':' + s,
      setTimeout(n, 1000);
    }()
  } catch (e) {
    console.log('Error: ' + e + ' in ' + clock.name)
  }
}