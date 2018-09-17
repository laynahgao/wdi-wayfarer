import React from 'react';
import './article.css'
import A1 from './a1.jpg';
import A2 from './a2.jpg';
import A3 from './a3.jpg';

const Article =() => {
  return (
    <div id="article" className="text-left paddsection">

    <div className="container">
      <div className="section-title text-center">
        <h2>TOP 3 CITIES</h2>
      </div>
    </div>

    <div className="container">
      <div className="article-block">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="article-info">

              <img src={A1} className="img-responsive" alt="img"/>

              <div className="article-txt">

                <h4>SAN FRANCISCO</h4>
                <p className="separator">San Francisco is home to a little bit of everything. Whether you're a first time visitor or a long-time local
                </p>

              </div>

            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="article-info">

              <img src={A2} className="img-responsive" alt="img"/>

              <div className="article-txt">

                <h4>LONDON</h4>
                <p className="separator">Make sure to discover London’s diverse neighbourhoods, from tranquil suburbs to central areas full of shopping, entertainment and dining options
                </p>

              </div>

            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="article-info">

              <img src={A3} className="img-responsive" alt="img"/>

              <div className="article-txt">

                <h4>NEW YORK</h4>
                <p className="separator">Visiting New York City on a budget might sound a bit far-fetched for some travelers, but with a little careful planning, you can have a successful trip to NYC
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  )
}
export default Article;