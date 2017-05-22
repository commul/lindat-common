#!/usr/bin/perl

use strict;
use warnings;
use Data::Dumper;

use lib qw(..);

use JSON qw();

my $filename = "package.json";

my $json_text = do {
   open(my $json_fh, "<:encoding(UTF-8)", $filename)
      or die("Can't open \$filename\": $!\n");
   local $/;
   <$json_fh>
};

my $json = JSON->new;
my $data = $json->decode($json_text);

# print Dumper $data;
my %hash = %{$data};

my $current_version = $hash{version};

my $new_version;

if ($current_version =~ /[a-z]$/) # already commul style
{
#	my $old_letter;
	(my $letter, $current_version) = ( substr($current_version,-1,1), substr($current_version,0,-1));
	$letter++;
	$new_version = $current_version . $letter; 	
}
else
{
	$new_version = $current_version . "-a";
}

print "v".$new_version;
