#!/usr/bin/perl

use strict;
use warnings;
use Data::Dumper;
use v5.14;

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

print "v".$hash{version};

# my $current_version = $ARGV[0];
