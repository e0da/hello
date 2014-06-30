require 'base64'
require 'erb'

OPEN_COMMANDS  = %w[ open xdg-open ]
URL            = 'http://localhost:3000'
BANNER_MESSAGE = "= Starting server at #{URL} ="
BANNER_BORDER  = '=' * BANNER_MESSAGE.length

BANNER = <<TEXT
#{BANNER_BORDER}
#{BANNER_MESSAGE}
#{BANNER_BORDER}
TEXT

def open_command
  OPEN_COMMANDS.each do |command|
    return command if system "type #{command}"
  end
end

desc 'Compile the script and run the server'
task default: [ :compile, :server ]

desc 'Compile the script'
task :compile do
  File.write(
    'hello.rb',
    ERB.new(File.read('hello.rb.erb')).result(
      OpenStruct.new(
        html: Base64.encode64(File.read('template.html'))
      ).instance_eval { binding }
    )
  )
end

desc 'Run the server'
task :server do
  warn BANNER
  system "( sleep 1 ; #{open_command} #{URL} ) & ruby hello.rb"
end

desc 'Remove generated files'
task :clean do
  rm 'hello.rb'
end
