<div className="App">
  <div className="App-header">
    <Link to="/">
      <h2>{name}</h2>
    </Link>
  </div>
  <iframe src="https://codap.concord.org/releases/latest/static/dg/en/cert/index.html#file=examples:Four%20Seals" id="1" width="100%" height="800px"/>
  <div style={{position:'absolute', bottom:0, left:0, height:300, width:800,
       overflowY:'scroll', background:'white', border:'1px solid black'}}>
  <Pages pages={pages} />
  <Route path='/pages/' component={Page} />
  </div>
</div>
{/* Mammals */}
