<div class="row">
    <div class="container">
        <div class="col-md-12">
           <table>
               <tr>
                   <td>From:</td>
                   <td>{{$from}}</td>
               </tr>
                         </table>
        </div>
        <hr>
        <div class="col-md-12">
            <h4>Dear ' <strong>{{$name}}</strong></h4>
            <p>
                <h4>new complain recevie which below following details.</h4>

            </p>
        </div>
        <h3>complain detail :</h3>
        <table>

            <tr>
                <td ><b>Name :</b></td>
                <td>{{$complain_name}}</td>
            </tr>
            <tr>
                <td><b>Email :</b></td>
                <td>{{$complain_email}}</td>
            </tr>
            <tr>
                <td><b>Complain Title :</b></td>
                <td>{{$complain_title}}</td>
            </tr>
            <tr>
                <td><b>Complain Department :</b></td>
                <td>{{$complain_dept}}</td>
            </tr>
            
            <tr>
                <td valign="top"><b>Compalin Description :</b></td>
                <td>{{nl2br($complain_desc)}}</td>
            </tr>
        </table>
    </div>
</div>
<?php
//  dd($complain_desc);
?>