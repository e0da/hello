require 'base64'
require 'erb'

OPEN_COMMANDS  = %w[ xdg-open open ]
URL            = 'http://localhost:3000'
BANNER_MESSAGE = "= Starting server at #{URL} ="
BANNER_BORDER  = '=' * BANNER_MESSAGE.length

BANNER = <<TEXT
#{BANNER_BORDER}
#{BANNER_MESSAGE}
#{BANNER_BORDER}
TEXT

def open_command
  @open_command ||=
    begin
      open_command = nil
      OPEN_COMMANDS.each do |command|
        open_command = command if system "which #{command}"
        break
      end
      open_command
    end
end

desc 'Compile the script; run the server; and open it in a browser'
task default: [ :compile, :open, :server ]

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

desc '(Try to) open it in a browser'
task :open do
  if open_command.nil?
    warn "I couldn't find a command to open the browser."
  else
    system "( sleep 1 ; #{open_command} #{URL} ) &"
  end
end

desc 'Run the server'
task :server do
  warn BANNER
  system 'ruby hello.rb'
end

desc 'Remove generated files'
task :clean do
  begin
    rm 'hello.rb'
  rescue Errno::ENOENT
    # Don't care
  end
end
