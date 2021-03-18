import React from 'react'


function Footer() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <div class="modal fade" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">

                <div class="modal-body">
                  <p>Do you want to delete the link between Authority XXXXXXXX and  User YYYYYYYY ?</p>
                  <div class="float-right">
                    <button type="button" class="btn btn-white border-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary ml-3" data-dismiss="modal">OK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
