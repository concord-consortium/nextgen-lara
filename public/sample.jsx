<div className="App">
  <div className="App-header">
    <Link to="/">
      <h2>Welcome to NextGen-LARA</h2>
    </Link>
  </div>
  <iframe src="http://concord.org" width="100%" />
  <Pages pages={pages} />
  <Route path='/pages/' component={Page} />
</div>
