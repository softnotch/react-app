import React from 'react';
import stella from './img/stella.jpg';
import fela from './img/fela.jpg';



function About() {
  return (
  
        <div>
           
            <section className="container mt-5 text-center ">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img src={stella} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non quidem minima facilis at deserunt sapiente quae laboriosam suscipit, dolorum corrupti voluptas repudiandae nihil atque officia vero explicabo. Quo sit nisi tempore numquam necessitatibus quaerat deserunt animi obcaecati, similique sunt. Voluptates nisi rerum dicta voluptatem est nemo fugiat odio praesentium ea reiciendis, accusantium at deleniti repellendus ipsa laboriosam porro cumque provident? Dolorum ea sequi, doloribus doloremque, quae, consequuntur ad dignissimos ullam facilis aspernatur quo harum! Maxime autem quisquam omnis ex alias sint cum eius aliquid repellendus maiores repellat possimus reiciendis, porro vel excepturi repudiandae nihil, asperiores dignissimos atque esse blanditiis qui. Cupiditate sunt esse expedita nisi qui, perferendis facere ducimus delectus dignissimos ullam ipsa facilis eos hic reprehenderit, assumenda nemo, repudiandae sequi ab. Adipisci perferendis accusantium tempora officiis voluptatem, doloremque mollitia autem deserunt assumenda eveniet. Laudantium magni soluta tenetur nihil, quo voluptates veritatis dicta accusantium facere eligendi optio dolor vel.</p>
                    </div>
                </div>
            </section>
            <section className="container mt-5 mb-5 text-center">
                <div className="row w-50 mx-auto">
                    <div className="col-md-4 mb-3">
                    <img src={fela} alt="" className="img-fluid rounded-circle" width="130px"/>
                    <div className="small">lorrem ipsummmm</div>
                  
                    </div>
                    <div className="col-md-4 mb-3">
                    <img src={fela} alt="" className="img-fluid rounded-circle" width="130px"/>
                    <div className="small">lorrem ipsummmm</div>
                    
                    </div>
                    <div className="col-md-4 ">
                    <img src={fela} alt="" className="img-fluid rounded-circle" width="130px"/>
                    <div className="small">lorrem ipsummmm</div>
                    </div>
                </div>
            </section>
            
        </div>
  );
}

export default About;