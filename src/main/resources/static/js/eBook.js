/* 添加电子书 */ 
$(function(){
	$("#addEBook").click(function(){
		$.ajax({
			type : "POST",
			url : getLocalhostPaht()+"/eBook/addEBook?",
			data : {
				"bookName":$("#bookName").val(),
				"bookType":$("#bookType").val(),
				"author":$("#author").val(),
				"price":$("#price").val(),
				"publishDate":$("#publishDate").val(),
				"describes":$("#describes").val()
			},
			success : function(data){
				if(data == 1){
					alert("添加成功");
				}else{
					alert("添加失败");
				}
			},
			error:function(errorData){
				alert("添加失败");
			}
		});
	});
	
	
});

