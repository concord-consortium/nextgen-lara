<div className="App">
  <div className="App-header">
    <Link to="/">
      <h2>{name}</h2>
    </Link>
  </div>
  <Pages pages={pages} />
  <Route path='/pages/' component={Page} />
</div>
