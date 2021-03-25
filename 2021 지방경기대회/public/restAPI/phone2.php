<?php
session_start();

header("Content-Type: application/json");

/* 세션 존재 비교 */
$statusCd = "200";
if(isset($_SESSION['locationCnt']))
{
	/* 세션이 존재할 경우 */
	$locationCnt = $_SESSION['locationCnt'];
	$locationCnt++; 
	$locationCnt = $_SESSION['locationCnt'] = $locationCnt;
}
else 
{
	/* 세션이 존재하지 않을 경우*/
    $locationCnt = $_SESSION['locationCnt'] = 0;
}

/* 카운트 수 비교 */
if($locationCnt % 5 == 0)
{
	$statusCd = "201";
}
?>
{
	"statusCd" : "<?php echo $statusCd; ?>",
	"statusMsg" : "알수 없는 오류가 발생했습니다.",
	"totalCount" : "47",
	"items" : [{"sn":1,"deptNm":"기획운영과","name":"여*기","telNo":"1001"},{"sn":2,"deptNm":"기획운영과","name":"장*석","telNo":"1002"},{"sn":3,"deptNm":"기획서무","name":"김**","telNo":"1003"},{"sn":4,"deptNm":"기획서무","name":"심**","telNo":"1004"},{"sn":5,"deptNm":"기획서무","name":"황**","telNo":"1005"},{"sn":6,"deptNm":"기획서무","name":"전**","telNo":"1006"},{"sn":7,"deptNm":"기획서무","name":"이**","telNo":"1007"},{"sn":8,"deptNm":"기획서무","name":"김**","telNo":"1008"},{"sn":9,"deptNm":"기획서무","name":"도**","telNo":"1009"},{"sn":10,"deptNm":"홍보","name":"남**","telNo":"1010"},{"sn":11,"deptNm":"홍보","name":"김**","telNo":"1011"},{"sn":12,"deptNm":"홍보","name":"양**","telNo":"1012"},{"sn":13,"deptNm":"홍보","name":"정**","telNo":"1013"},{"sn":14,"deptNm":"홍보","name":"박**","telNo":"1014"},{"sn":15,"deptNm":"시설","name":"황**","telNo":"1015"},{"sn":16,"deptNm":"시설","name":"강**","telNo":"1016"},{"sn":17,"deptNm":"시설","name":"오**","telNo":"1017"},{"sn":18,"deptNm":"전승지원과","name":"김**","telNo":"1018"},{"sn":19,"deptNm":"전승지원과","name":"박**","telNo":"1019"},{"sn":20,"deptNm":"이수심사","name":"신**","telNo":"1020"},{"sn":21,"deptNm":"이수심사","name":"윤**","telNo":"1021"},{"sn":22,"deptNm":"이수심사","name":"김**","telNo":"1022"},{"sn":23,"deptNm":"조사연구기록과","name":"김**","telNo":"1023"},{"sn":24,"deptNm":"조사연구기록과","name":"최**","telNo":"1024"},{"sn":25,"deptNm":"조사연구기록과","name":"오**","telNo":"1025"},{"sn":26,"deptNm":"조사연구기록과","name":"박**","telNo":"1026"},{"sn":27,"deptNm":"조사연구기록과","name":"신*","telNo":"1027"},{"sn":28,"deptNm":"조사연구기록과","name":"차**","telNo":"1028"},{"sn":29,"deptNm":"조사연구","name":"김**","telNo":"1029"},{"sn":30,"deptNm":"조사연구","name":"송**","telNo":"1030"},{"sn":31,"deptNm":"조사연구","name":"이**","telNo":"1031"},{"sn":32,"deptNm":"기록화사업","name":"이**","telNo":"1032"},{"sn":33,"deptNm":"기록화사업","name":"이**","telNo":"1033"},{"sn":34,"deptNm":"기록화사업","name":"윤**","telNo":"1034"},{"sn":35,"deptNm":"기록화사업","name":"양**","telNo":"1035"},{"sn":36,"deptNm":"교육협력","name":"성**","telNo":"1036"},{"sn":37,"deptNm":"교육협력","name":"오**","telNo":"1037"},{"sn":38,"deptNm":"교육협력","name":"이**","telNo":"1038"},{"sn":39,"deptNm":"교육협력","name":"김**","telNo":"1039"},{"sn":40,"deptNm":"전시","name":"송**","telNo":"1040"},{"sn":41,"deptNm":"전시","name":"조**","telNo":"1041"},{"sn":42,"deptNm":"공연","name":"이**","telNo":"1042"},{"sn":43,"deptNm":"공연","name":"최**","telNo":"1043"},{"sn":44,"deptNm":"공연","name":"어**","telNo":"1044"},{"sn":45,"deptNm":"공연","name":"곽**","telNo":"1045"},{"sn":46,"deptNm":"공연","name":"방**","telNo":"1046"},{"sn":47,"deptNm":"공연","name":"박**","telNo":"1047"}]
}
