<?php
/**
 * Created by PhpStorm.
 * User: geoff
 * Date: 4/1/14
 * Time: 9:52 AM
 */

$result = true;

$suite = array();
$suites = array();

if (file_exists("../test-automation/SmokeTests/reports/test_log.txt")) {
    $result = rename("../test-automation/SmokeTests/reports/test_log.txt",
        "../test-automation/SmokeTests/reports/" . date("U", filectime("../test-automation/SmokeTests/reports/test_log.txt")));
}

if (!$result) die ("Couldn't rename file!\n");

$dir = opendir("../test-automation/SmokeTests/reports");

$count = 0;

do {
    $file = readdir($dir);
    if (($file) && ($file != ".") && ($file != "..")) {
        $data = file_get_contents("../test-automation/SmokeTests/reports/" . $file);
        $json = '[' . str_replace('}{', '},{', $data) . ']';
        $decoded = json_decode($json, true);
        $testCount = 0;
        foreach ($decoded as $event) {
            //var_dump($event['event']);
            if ($event['event'] == 'test') {
                $suite[$testCount] = $event;
                $suite[$testCount]['id'] = $testCount;
                $testCount++;

            }
        };

        $suites[$count]['id'] = $count;
        $suites[$count]['date'] = $file;
        $suites[$count]['tests'] = $suite;
        $count++;

    }
} while ($file);

$suites = '{ "suite" : ' . json_encode($suites) . '}';




echo($suites);










