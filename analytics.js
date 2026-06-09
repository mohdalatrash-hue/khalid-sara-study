/* =============================================================================
   analytics.js — site-wide tracking helper
   Loaded by all pages after config.js. Three independent tiers — any or all
   can be active; each fails silently without affecting the quiz engine.

   Tier 1 (zero-setup): CounterAPI — public visit counter, subject & form stats
   Tier 2 (your data):  LOG_ENDPOINT — extends your Google Sheet with page views
   Tier 3 (pro):        GA4 / GoatCounter — full analytics dashboards
   ============================================================================= */

(function(){
  /* ── Inject Google Analytics 4 if GA_ID is set in config.js ── */
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

  /* ── Inject GoatCounter if GOAT_CODE is set in config.js ── */
  var GC = typeof GOAT_CODE !== 'undefined' ? GOAT_CODE : '';
  if(GC){
    var g = document.createElement('script');
    g.async = true;
    g.dataset.goatcounter = 'https://' + GC + '.goatcounter.com/count';
    g.src = '//gc.zgo.at/count.js';
    document.head.appendChild(g);
  }
})();

/* ─────────────────────────────────────────────────────────────────────────────
   _countHit(key)
   Fire a hit for any string key. Naming convention used in this project:
     'total'          → index page load
     's4-lughati'     → Sara  لغتي  opened
     's6-english'     → Khalid English opened
     's4-math-f2'     → Sara  Riyathiات  Form 2 started
     's6-science-fr'  → Khalid Science "all questions" started
   All three tiers are fired; any failure is swallowed.
───────────────────────────────────────────────────────────────────────────── */
function _countHit(key){
  try{
    var ns = (typeof COUNTER_NS !== 'undefined' && COUNTER_NS) || 'khalid-sara-study';

    /* Tier 1 — CounterAPI */
    fetch('https://api.counterapi.dev/v1/' + ns + '/' + encodeURIComponent(key) + '/up',
      { cache: 'no-cache' }).catch(function(){});

    /* Tier 2 — LOG_ENDPOINT  */
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
   Read the current count for a key WITHOUT incrementing it.
   callback(error, count_number)
───────────────────────────────────────────────────────────────────────────── */
function _fetchCount(key, cb){
  try{
    var ns = (typeof COUNTER_NS !== 'undefined' && COUNTER_NS) || 'khalid-sara-study';
    fetch('https://api.counterapi.dev/v1/' + ns + '/' + encodeURIComponent(key),
      { cache: 'no-cache' })
      .then(function(r){ return r.json(); })
      .then(function(d){ cb(null, d.Count || d.count || 0); })
      .catch(function(e){ cb(e, 0); });
  }catch(e){ cb(e, 0); }
}
