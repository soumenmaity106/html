$(document).ready(function () {

    // $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    // });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
        
        $('#sidebarCollapse').on('click',function(){
            $('#progressBar').toggleClass('progressbarremoveclass');
        })

        $('#sidebarCollapse').on('click',function(){
            $('#veowallprofile').toggleClass('progressbarremoveclass');
        })

        $('#sidebarCollapse').on('click',function(){
            $('#panel-default').toggleClass('progressbarremoveclass');
        })

        $('.language-editing').on('click',function(){
            $('#tab-item-class').addClass('left-language-editing');
            $('#right-tab-item-class').removeClass('left-language-editing');
        })

        $('.language-editing-right').on('click',function(){
            $('#tab-item-class').removeClass('left-language-editing');
            $('#right-tab-item-class').addClass('left-language-editing');
        })


        //Add more multiple filed
         var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = ' <div id="field'+ next +'" name="field'+ next +'"><!-- Text input--><div class="form-group"> <label class="col-md-2 control-label" for="action_id">Full Name</label> <div class="col-md-10"> <input id="action_id" name="action_id" type="text" placeholder="" class="form-control input-md"> </div></div><br><br> <!-- Text input--><div class="form-group"> <label class="col-md-2 control-label" for="action_name">Email Id</label> <div class="col-md-10"> <input id="action_name" name="action_name" type="text" placeholder="" class="form-control input-md"> </div></div><br><br><!-- Text input--><div class="form-group"> <label class="col-md-2 control-label" for="action_id">Office Number</label> <div class="col-md-10"> <input id="action_id" name="action_id" type="text" placeholder="" class="form-control input-md"> </div></div><br><br> <!-- Text input--><div class="form-group"> <label class="col-md-2 control-label" for="action_name">Affiliation</label> <div class="col-md-10"> <input id="action_name" name="action_name" type="text" placeholder="" class="form-control input-md"> </div></div><br><br></div>';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
        
            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });

    //chart js
    
       
});
