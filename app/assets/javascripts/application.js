// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap/alert
//= require bootstrap/dropdown
//= require_tree .


$(document).ready(function() {
    var activeSystemClass = $('.list-group-item.active');

    //something is entered in search form
    $('#system-search').keyup( function() {
       var that = this;
        // affect all table rows on in systems table
        var tableBody = $('.table-list-search tbody');
        var tableRowsClass = $('.table-list-search tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each( function(i, val) {

            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if(inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Searching for: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else
            {
                $('.search-query-sf').remove();
            }

            if( rowText.indexOf( inputText ) == -1 )
            {
                //hide rows
                tableRowsClass.eq(i).hide();

            }
            else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if(tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">No entries found.</td></tr>');
        }
    });
});


const {Component} = React;
const {render} = ReactDOM;

class Level extends Component {
  render() {
    const {
      levelName,
      animate,
      percentage
    } = this.props;
    return (
      <div className="tube-wrapper">
                    <div className="tube">
                        <div className={"liquid " + levelName + ' ' + animate} style={{top: (100 - percentage) + '%'}}>
                            <div className="bubble circle"></div>
                            <div className="bubble circle2"></div>
                            <div className="bubble circle3"></div>
                            <div className="bubble circle4"></div>
                            <div className="bubble circle5"></div>
                            <div className="bubble circle6"></div>
                          <div className="bubble circle7"></div>
                        <div className="bubble circle8"></div>
                        <div className="bubble circle9"></div>
                        </div>
                        <div className="metrics">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="side-line"></div>
                        <div className="neck"></div>
                        <div className="head"></div>
                    </div>
                <span className="level-name">{this.props.levelName}</span>
            </div>
    )
  }
};

class App extends Component {
  state = {
    feelingIndex: 0,
    animate: '',
    current: 0
  };

  getFeelings = () => [{
    feeling: 'love',
    levels: {
      dopamine: 93,
      serotonin: 93,
      oxytocin: 93
    }
  }, {
    feeling: 'depression',
    levels: {
      dopamine: 28,
      serotonin: 14,
      oxytocin: 3
    }
  }, {
    feeling: 'happiness',
    levels: {
      dopamine: 3,
      serotonin: 100,
      oxytocin: 7
    }
  }, {
    feeling: 'anxiety',
    levels: {
      dopamine: 20,
      serotonin: 3,
      oxytocin: 3
    }
  }];

  changeFeeling = () => {
    let start = Date.now();
    this.setState({
      feelingIndex: this.state.current,
      animate: 'animate'
    });
    this.setState({
      current: this.state.current + 1
    });
    if (this.state.current === this.getFeelings().length) {
      this.setState({
        current: 0
      });
    }
    setTimeout(() => {
      let end = Date.now() - start;
      if (end > 3950) {
        this.setState({
          animate: ''
        });
      }
    }, 4000)
  };

  setInterval = () => {
    this.changeFeeling();
    setInterval(this.changeFeeling, 4500);
  };

  componentDidMount() {
    this.setInterval();
  };

  render() {
    const {
      feelingIndex,
      animate
    } = this.state;
    const feeling = this.getFeelings()[feelingIndex];
    const feelingName = feeling.feeling;
    const levels = feeling.levels;
    return (
      <div className="App">
                <h1 className={animate}>{feelingName}</h1>
                <div className="tubes-wrapper">
                    { Object.keys(levels).map((level, index) => <Level key={index} animate={animate} levelName={level} percentage={levels[level]}></Level>) }
                </div>
                            <a className="source-link" target="_blank" href="https://github.com/edindelan/animated-feelings">Source code - GitHub</a>
            </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
