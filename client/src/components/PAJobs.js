import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PAJobs extends Component{
    render(){
        return(

<div className="container"> 
<img src="http://placehold.it/468x60/eee" /><br /><br />
    <div className="content-container container">


{/* <img src="http://teachercatapult.com/wp-content/themes/jobroller/images/background.jpg" alt="bg" className="bg" />  */}

<div className="row">

    <div className="col-md-8 col-lg-9">
    <center><h2>Teaching Jobs in PA, Updated: Jan. 09, 2018</h2></center>

{/* <p>Teaching jobs in PA are scattered across hundreds of school district websites across the internet. Teacher Catapult's small army of teachers and volunteers are proud to bring you hundreds of Pennsylvania teaching jobs updated every single day. We love teachers and we do our best to find as many teaching jobs in PA that we can. We target all areas of Pennsylvania as well as all teaching specialities and grade levels.</p>

<p>
Use the Search box to filter down the table. Try typing a keyword like "elementary", "social studies", "allegheny county", or "bucks county" to find exactly what you are looking for.
</p> */}

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
                    </span>
            </div>
            <br />
            <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th className="position">Job and District</th>
                    <th>Location</th>
                    <th>Date Posted/ Last Checked</th>
                </tr>
            </thead>
        <tbody>
        <tr        >
        <td>1</td>
        <td>
          <strong><a href="http://teachercatapult.com/jobs/rti-teacher-k-2/" rel="nofollow" target="_blank">RtI Teacher K-2</a></strong><br />
          Gettysburg Montessori Charter School &ndash; Posted by <a href="http://teachercatapult.com/author/fayepleso/">fayepleso</a>          <span className="address"><br />Gettysburg, Pennsylvania, United States</span>
           
        </td>
        <td>Gettysburg, Pennsylvania, United States</td>
        <td >Dec. 4, 2017</td>
      </tr>
              <tr>
        <td>2</td>
        <td >
          <strong><a href="http://www.allentownsd.org/content/current-job-vacancies" rel="nofollow" target="_blank">Autistic Support Teacher</a></strong><br />
          Allentown City SD          <span className="address"><br />Lehigh County - Allentown, PA</span>
          
        </td>
        <td>Lehigh County<br />Allentown, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      
            <tr>
        <td>3</td>
        <td >
          <strong><a href="http://www.ambridge.k12.pa.us/index.php/employment-hr" rel="nofollow" target="_blank">Life Skills</a></strong><br />
          Ambridge Area SD          <span className="address"><br />Beaver County - Ambridge, PA</span>
          
        </td>
        <td>Beaver County<br />Ambridge, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      
            <tr>
        <td>4</td>
        <td >
          <strong><a href="http://www.acschools.org/Page/541" rel="nofollow" target="_blank">Speech and Language Teacher</a></strong><br />
          Annville-Cleona SD          <span className="address"><br />Lebanon County - Annville, PA</span>
          
        </td>
        <td>Lebanon County<br />Annville, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      
            <tr>
        <td>5</td>
        <td >
          <strong><a href="https://bellefonte.tedk12.com/hire/index.aspx" rel="nofollow" target="_blank">Guidance Counselor</a></strong><br />
          Bellefonte Area SD          <span className="address"><br />Centre County - Bellefonte, PA</span>
          
        </td>
        <td>Centre County<br />Bellefonte, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      
            <tr>
        <td>6</td>
        <td >
          <strong><a href="https://bellefonte.tedk12.com/hire/index.aspx" rel="nofollow" target="_blank">Reading Specialist</a></strong><br />
          Bellefonte Area SD          <span className="address"><br />Centre County - Bellefonte, PA</span>
          
        </td>
        <td>Centre County<br />Bellefonte, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      
            <tr>
        <td>7</td>
        <td >
          <strong><a href="http://www.bbsd.com/Page/40" rel="nofollow" target="_blank">Business Teacher</a></strong><br />
          Berlin Brothersvalley SD          <span className="address"><br />Somerset County - Berlin, PA</span>
          
        </td>
        <td>Somerset County<br />Berlin, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      
            <tr>
        <td>8</td>
        <td >
          <strong><a href="http://bloomsburgasd.schoolwires.com/Domain/42" rel="nofollow" target="_blank">Guidance Counselor</a></strong><br />
          Bloomsburg Area SD          <span className="address"><br />Columbia County - Bloomsburg, PA</span>
          
        </td>
        <td>Columbia County<br />Bloomsburg, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      
            <tr>
        <td>9</td>
        <td >
          <strong><a href="http://www.bmsd.org/?page_id=217" rel="nofollow" target="_blank">Autistic Support Teacher</a></strong><br />
          Blue Mountain SD          <span className="address"><br />Schuylkill County - Orwigsburg, PA</span>
          
        </td>
        <td>Schuylkill County<br />Orwigsburg, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      
            <tr>
        <td>10</td>
        <td >
          <strong><a href="http://www.bmsd.org/?page_id=217" rel="nofollow" target="_blank">Early Childhood Teacher</a></strong><br />
          Blue Mountain SD          <span className="address"><br />Schuylkill County - Orwigsburg, PA</span>
          
        </td>
        <td>Schuylkill County<br />Orwigsburg, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      
            <tr>
        <td>11</td>
        <td >
          <strong><a href="https://bhasd.tedk12.com/hire/index.aspx" rel="nofollow" target="_blank">Autistic Support Teacher</a></strong><br />
          Brandywine Heights Area SD          <span className="address"><br />Berks County - Topton, PA</span>
          
        </td>
        <td>Berks County<br />Topton, PA</td>
        <td >Jan. 09, 2018</td>
      </tr>
      </tbody>
</table>
    </div>

    <div className="col-md-4 col-lg-3" >
        
        
    <h4>Sign-Up To Get Emails</h4>
                <p>New job postings are sent right to your inbox weekly.</p>
                <p>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Email Address..." />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div>
                 </p>
                <br />
                <h4>Get Found By Employers!</h4>
                <Link to="/submit-your-resume"><button className="btn btn-primary btn-block"><span className="white-link">Submit Your Resume</span></button></Link>
                 <br />
                
        <h4>Ad</h4>
        <img src="http://placehold.it/250x230/eee" />
    </div>
  </div>
          
  </div>
</div>
        )
    }
}

export default PAJobs;