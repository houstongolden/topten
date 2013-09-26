# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


video1 = Video.new(:title => "Cash Cash - Take Me Home (The Chainsmokers Remix)", :url => "http://www.youtube.com/watch?v=Cxliw92yHzs", :youtube_id => "Cxliw92yHzs")
video1.save!

video2 = Video.new(:title => "The Killers - Miss Atomic Bomb (The Chainsmokers Remix)", :url => "http://www.youtube.com/watch?v=6-vpp4J-Rgk", :youtube_id => "6-vpp4J-Rgk")
video2.save!

video3 = Video.new(:title => "Julian - Say Lou Lou (The Chainsmokers Remix)", :url => "http://www.youtube.com/watch?v=tI2LwQGZTDA", :youtube_id => "tI2LwQGZTDA")
video3.save!
