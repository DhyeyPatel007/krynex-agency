#!/bin/bash
set -e
C=cards; S=segs; mkdir -p $S; FPS=30
# seg name img dur mode(in/out)
seg() {
  local name=$1 img=$2 dur=$3 mode=$4
  local frames=$(python3 -c "print(int($dur*$FPS))")
  local zexpr
  if [ "$mode" = "in" ]; then zexpr="min(1+0.08*on/$frames,1.08)"
  else zexpr="max(1.08-0.08*on/$frames,1.0)"; fi
  ffmpeg -y -v error -loop 1 -framerate $FPS -i "$img" \
    -vf "scale=3840:2160,zoompan=z='$zexpr':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=$frames:s=1920x1080:fps=$FPS" \
    -frames:v $frames -c:v libx264 -preset medium -pix_fmt yuv420p "$S/$name.mp4"
  echo "seg $name ${dur}s $mode"
}
seg s01 "$C/c01_hook.png" 5.5 in
seg s02 "$C/c02_surface.png" 5.5 out
seg s03 "$C/c03_who.png" 5.5 in
seg s04 "$C/c04_xray.png" 6 out
seg s05 "$C/c05_issues.png" 6 in
seg s06 "$C/c06_localhost.png" 6 out
seg s07 "$C/c07_triple.png" 6 in
seg s08 "$C/c08_bars.png" 5.5 out
seg s09 "$C/c09_steps12.png" 6 in
seg s10 "$C/c10_steps34.png" 6 out
seg s11 "$C/c11_motto.png" 6 in
seg s12 "$C/c12_stop.png" 6 out
seg s13 "$C/c13_cta.png" 8 in
seg s14 "$C/c14_end.png" 8 out
printf "file '%s'\n" "$PWD"/$S/s*.mp4 > $S/list.txt
ffmpeg -y -v error -f concat -safe 0 -i $S/list.txt -i narration.mp3 \
  -vf "fade=t=in:st=0:d=0.5,fade=t=out:st=84.5:d=1.4" \
  -c:v libx264 -preset medium -pix_fmt yuv420p -c:a aac -b:a 160k -shortest \
  krynex-explainer.mp4
echo "=== BUILT ==="; ffprobe -v error -show_entries format=duration,size -show_entries stream=width,height,codec_name -of default=noprint_wrappers=1 krynex-explainer.mp4
