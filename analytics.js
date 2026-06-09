/* =============================================================================
   analytics.js — site-wide tracking helper
   Loaded by all pages after config.js.

   Tier 1 (zero-setup): hits.sh — fire a pixel image on every hit, display
                         counts as badge images or parse SVG on stats page.
   Tier 2 (your data):  LOG_ENDPOINT — extends your Google Sheet with events.
   Tier 3 (pro):        GA4 / GoatCounter — full analytics dashboards.
   ============================================================================= */

(function(){
  /* ── Inject Google Analytics 4 if GA_ID is set ── */
  var GA = typeof GA_ID !== 'undefined' ? GA_ID : '';
  if(GA){
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA, { send_page_view: true });
  }

  /* ── Inject GoatCounter if GOAT_CODE is set ── */
  var GC = typeof GOAT_CODE !== 'undefined' ? GOAT_CODE : '';
  if(GC){
    var g = document.createElement('script');
    g.async = true;
    g.dataset.goatcounter = 'https://' + GC + '.goatcounter.com/count';
    g.src = '//gc.zgo.at/count.js';
    document.head.appendChild(g);
  }
})();

/* ── Helpers ── */
function _hitsBase(){
  return (typeof HITS_PATH !== 'undefined' && HITS_PATH)
         || 'mohdalatrash-hue.github.io/khalid-sara-study';
}
function _hitsUrl(key){
  return 'https://hits.sh/' + _hitsBase() + '/' + encodeURIComponent(key) + '.svg';
}

/* ─────────────────────────────────────────────────────────────────────────────
   _countHit(key)
   Fire a tracking hit. Naming convention:
     'total'              → index page load
     's4-lughati'         → Sara لغتي opened
     's4-lughati-f2'      → Sara لغتي Form 2 started
     's6-science-mr'      → Khalid Science "all markazi" started
   ────────────────────────────────────────────────────────────────────────── */
function _countHit(key){
  try{
    /* Tier 1 — hits.sh: fire a 1×1 invisible image pixel.
       The image GET request increments the counter for this key.
       hits.sh is free, no account needed, reliable (powers millions of repos). */
    var img = new Image();
    img.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;';
    img.src = _hitsUrl(key);
    if(document.body) document.body.appendChild(img);
    setTimeout(function(){
      try{ if(img.parentNode) img.parentNode.removeChild(img); }catch(e){}
    }, 5000);

    /* Tier 2 — LOG_ENDPOINT (Google Apps Script sheet logger) */
    if(typeof LOG_ENDPOINT !== 'undefined' && LOG_ENDPOINT){
      var isForm = key.indexOf('-f') !== -1;
      fetch(LOG_ENDPOINT, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          kind: isForm ? 'form_start' : 'page_view',
          key:  key,
          url:  location.pathname,
          name: typeof studentName !== 'undefined' ? studentName : '',
          date: new Date().toISOString()
        })
      }).catch(function(){});
    }

    /* Tier 3a — GoatCounter */
    if(window.goatcounter && window.goatcounter.count)
      window.goatcounter.count({ path: '/' + key });

    /* Tier 3b — GA4 */
    if(window.gtag){
      var isF = key.indexOf('-f') !== -1;
      gtag('event', isF ? 'form_start' : 'subject_open', {
        event_category: 'study',
        event_label: key
      });
    }
  }catch(e){}
}

/* ─────────────────────────────────────────────────────────────────────────────
   _fetchCount(key, callback)
   Read the hits.sh count for a given key by fetching its SVG badge and
   parsing the number. Note: fetching the SVG also increments the counter
   by 1 (hits.sh has no read-only endpoint — this is an accepted trade-off).
   callback(error, count_number)
   ────────────────────────────────────────────────────────────────────────── */
function _fetchCount(key, cb){
  try{
    fetch(_hitsUrl(key), { cache: 'no-cache' })
      .then(function(r){ return r.text(); })
      .then(function(svg){
        /* Extract the last numeric text node in the SVG — that's the count */
        var found = [], re = />([0-9][0-9,]*)</g, m;
        while((m = re.exec(svg)) !== null){
          var n = parseInt(m[1].replace(/,/g, ''), 10);
          if(!isNaN(n)) found.push(n);
        }
        cb(null, found.length ? found[found.length - 1] : 0);
      })
      .catch(function(e){ cb(e, 0); });
  }catch(e){ cb(e, 0); }
}
