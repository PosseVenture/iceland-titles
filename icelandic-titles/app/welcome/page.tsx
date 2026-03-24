"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Download, MapPin, BookOpen, Globe, Heart, Calendar,
  ChevronRight, X, ExternalLink, Copy, Check, Star, TreePine,
  Binoculars, Mountain, ShieldCheck, Clock, Play, Pause,
  RotateCcw, ZoomIn, ZoomOut, ChevronDown, ChevronUp, Award,
  Leaf, Bird, BadgeCheck, ArrowRight, Map, AlertCircle, Compass
} from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { DEMO_USER, HANDBOOK_CHAPTERS, TOUR_SCENES } from "@/lib/demo-user";
import type { DemoPlot, DemoAdoption } from "@/lib/demo-user";

// ─── Certificate Modal ─────────────────────────────────────────────────────────
function CertificateModal({ plot, onClose }: { plot: DemoPlot; onClose: () => void }) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => { setDownloading(false); setDownloaded(true); }, 1800);
    // TODO Part 6: real PDF via /api/certificate?plotRef=...
  };

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog" aria-modal="true" aria-labelledby="cert-modal-title"
    >
      <motion.div
        initial={{ scale: 0.88, y: 32, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.93, y: 16, opacity: 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 280 }}
        className="relative w-full max-w-2xl bg-[#060f1e] border border-white/[0.1] rounded-3xl overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)]"
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-xl bg-black/50 text-white/50 hover:text-white hover:bg-black/70 transition-all"
          aria-label="Close certificate preview"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Certificate artwork with Iceland map background */}
        <div className="relative bg-gradient-to-br from-[#0b1a2e] via-[#071020] to-[#040c18] overflow-hidden" style={{ aspectRatio: "1.414" }}>
          <svg viewBox="0 0 600 340" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <radialGradient id="cert-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.08"/>
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
              </radialGradient>
              <filter id="cert-blur"><feGaussianBlur stdDeviation="3"/></filter>
            </defs>
            {/* Iceland silhouette */}
            <path d="M75,180 Q90,130 130,115 Q165,100 195,108 Q230,115 265,105 Q305,93 345,102 Q385,112 415,128 Q450,148 465,170 Q478,192 472,218 Q460,248 430,260 Q395,272 358,268 Q315,264 280,272 Q242,280 208,272 Q168,260 140,240 Q108,218 88,200 Q76,190 75,180 Z"
              fill="#F59E0B" opacity="0.05" filter="url(#cert-blur)"/>
            <path d="M75,180 Q90,130 130,115 Q165,100 195,108 Q230,115 265,105 Q305,93 345,102 Q385,112 415,128 Q450,148 465,170 Q478,192 472,218 Q460,248 430,260 Q395,272 358,268 Q315,264 280,272 Q242,280 208,272 Q168,260 140,240 Q108,218 88,200 Q76,190 75,180 Z"
              fill="none" stroke="#F59E0B" strokeWidth="0.8" opacity="0.1"/>
            {/* Tectonic rift */}
            <path d="M185,60 Q205,125 218,190 Q231,255 242,310" stroke="#00D4FF" strokeWidth="1" opacity="0.07" strokeDasharray="5,4" fill="none"/>
            {/* Glow */}
            <ellipse cx="300" cy="170" rx="200" ry="130" fill="url(#cert-glow)"/>
            {/* Location markers */}
            <circle cx="165" cy="182" r="3" fill="#F59E0B" opacity="0.3"/>
            <circle cx="378" cy="215" r="3" fill="#00D4FF" opacity="0.3"/>
          </svg>

          {/* Border ornaments */}
          <div className="absolute inset-5 border border-[#F59E0B]/15 rounded-xl pointer-events-none" aria-hidden="true"/>
          <div className="absolute inset-7 border border-[#F59E0B]/07 rounded-lg pointer-events-none" aria-hidden="true"/>
          {/* Corner ornaments */}
          {["top-9 left-9","top-9 right-9","bottom-9 left-9","bottom-9 right-9"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-6 h-6 pointer-events-none`} aria-hidden="true">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d={i===0?"M0,20 L0,0 L20,0":i===1?"M4,0 L24,0 L24,20":i===2?"M0,4 L0,24 L20,24":"M4,24 L24,24 L24,4"}
                  fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.3"/>
              </svg>
            </div>
          ))}

          {/* Certificate content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-14 py-10">
            <p className="font-display text-[9px] tracking-[0.55em] uppercase text-[#F59E0B]/40 mb-5">
              Icelandic Titles ehf. · Reykjavík, Iceland · Est. 2024
            </p>
            <div className="text-2xl mb-4" aria-hidden="true">❄</div>
            <p className="font-display text-[11px] tracking-[0.28em] uppercase text-white/28 mb-2">This Certificate Confirms That</p>
            <p className="font-display text-[clamp(1.3rem,3.5vw,2rem)] font-bold text-white mb-1 leading-tight">{plot.recipientName}</p>
            <p className="text-xs text-white/28 mb-4">is the registered souvenir holder of</p>
            <p className="font-display text-base font-semibold text-[#F59E0B]/90">
              {plot.sqft} Square {plot.sqft === 1 ? "Foot" : "Feet"} of the Icelandic Highlands
            </p>
            <p className="text-[11px] text-white/32 mt-1.5">{plot.reserveName}</p>
            <p className="text-[10px] text-white/22 mt-0.5">{plot.what3words}</p>
            <p className="text-[9px] text-white/18 mt-0.5 font-mono tracking-widest">{plot.plotRef}</p>
            <div className="mt-6 pt-4 border-t border-[#F59E0B]/12 w-full max-w-[260px]">
              <p className="font-display text-[8px] tracking-[0.4em] uppercase text-white/16 leading-relaxed">
                A Souvenir Gift · No Legal Land Rights Conveyed
              </p>
              <p className="text-[8px] text-white/10 mt-1">Icelandic Titles ehf. remains the registered landowner</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-5 border-t border-white/[0.06]">
          <div>
            <p id="cert-modal-title" className="text-sm font-semibold text-white">{plot.plotRef}</p>
            <p className="text-xs text-white/35 mt-0.5">Purchased {formatDate(plot.purchaseDate)}</p>
          </div>
          <button onClick={handleDownload} disabled={downloading}
            className={cn("flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all",
              downloaded ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : downloading ? "bg-white/10 text-white/40 cursor-wait"
              : "bg-gradient-to-r from-[#F59E0B] to-amber-600 text-[#060D19] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02]"
            )}>
            {downloaded ? <><Check className="w-4 h-4"/>Downloaded</>
              : downloading ? <><div className="w-4 h-4 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"/>Generating…</>
              : <><Download className="w-4 h-4"/>Download PDF</>}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Interactive Map Card ──────────────────────────────────────────────────────
function PlotMapCard({ plot, onViewCert }: { plot: DemoPlot; onViewCert: () => void }) {
  const [copied, setCopied] = useState(false);
  const coordStr = `${plot.coordinates.lat.toFixed(6)}, ${plot.coordinates.lng.toFixed(6)}`;
  const mapsUrl = `https://www.google.com/maps?q=${plot.coordinates.lat},${plot.coordinates.lng}&z=16&t=k`;
  const w3wSlug = plot.what3words.replace("///", "");

  const reserveTheme: Record<string, { from: string; border: string; dot: string }> = {
    "thingvellir":   { from: "from-blue-900/30",   border: "border-blue-500/25",   dot: "#00D4FF" },
    "highland-view": { from: "from-violet-900/30",  border: "border-violet-500/25", dot: "#7C3AED" },
    "glacier-estate":{ from: "from-cyan-900/30",    border: "border-cyan-500/25",   dot: "#10B981" },
  };
  const theme = reserveTheme[plot.reserve] ?? reserveTheme["thingvellir"];

  // Position on simplified Iceland SVG (lng -25 to -13, lat 63.2 to 65.5)
  const mapX = Math.max(20, Math.min(300, ((plot.coordinates.lng - (-25)) / 12) * 280 + 20));
  const mapY = Math.max(20, Math.min(140, ((65.5 - plot.coordinates.lat) / 2.3) * 120 + 20));

  return (
    <article className={cn("bg-gradient-to-b to-[#07111f] border rounded-2xl overflow-hidden", theme.from, theme.border)}>
      {/* Map area */}
      <div className="relative h-44 bg-[#07111f] overflow-hidden cursor-pointer group" onClick={() => window.open(mapsUrl, "_blank")}>
        <svg viewBox="0 0 320 160" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <radialGradient id={`dg-${plot.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={theme.dot} stopOpacity="0.5"/>
              <stop offset="100%" stopColor={theme.dot} stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Grid */}
          {[40,80,120,160,200,240,280].map(x=><line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#1a3050" strokeWidth="0.5"/>)}
          {[32,64,96,128].map(y=><line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#1a3050" strokeWidth="0.5"/>)}
          {/* Iceland */}
          <path d="M28,80 Q38,55 60,48 Q82,41 105,46 Q128,51 148,44 Q172,36 198,43 Q224,50 242,62 Q262,76 268,92 Q274,108 264,124 Q248,142 224,148 Q200,154 176,150 Q152,146 132,152 Q108,158 88,150 Q64,140 46,124 Q28,108 24,94 Z"
            fill={theme.dot} opacity="0.05"/>
          <path d="M28,80 Q38,55 60,48 Q82,41 105,46 Q128,51 148,44 Q172,36 198,43 Q224,50 242,62 Q262,76 268,92 Q274,108 264,124 Q248,142 224,148 Q200,154 176,150 Q152,146 132,152 Q108,158 88,150 Q64,140 46,124 Q28,108 24,94 Z"
            fill="none" stroke={theme.dot} strokeWidth="0.8" opacity="0.12"/>
          {/* Plot glow */}
          <circle cx={mapX} cy={mapY} r="22" fill={`url(#dg-${plot.id})`}/>
          <circle cx={mapX} cy={mapY} r="7"  fill={theme.dot} opacity="0.2"/>
          <circle cx={mapX} cy={mapY} r="4"  fill={theme.dot} opacity="0.9"/>
          <circle cx={mapX} cy={mapY} r="4"  fill="none" stroke={theme.dot} strokeWidth="1.5" opacity="0.5"/>
          {/* Reykjavik */}
          <circle cx="52" cy="89" r="2" fill="#F59E0B" opacity="0.45"/>
          <text x="57" y="92" fontSize="7" fill="#F59E0B" opacity="0.3" fontFamily="monospace">Reykjavík</text>
        </svg>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <ExternalLink className="w-3 h-3"/>Open Google Maps
          </span>
        </div>
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-lg text-xs text-white/70 font-medium">
          {plot.reserveName}
        </div>
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white/55 hover:text-white border border-white/10 hover:border-white/25 px-2.5 py-1.5 rounded-lg text-xs transition-all"
          aria-label="Open satellite view in Google Maps">
          <Map className="w-3 h-3"/>Satellite View
        </a>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-display text-base font-bold text-white leading-tight">{plot.recipientName}</p>
            <p className="text-xs text-white/35 font-mono mt-0.5">{plot.plotRef}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-bold text-white">{plot.sqft}</p>
            <p className="text-[10px] text-white/35 uppercase tracking-wider">sq ft</p>
          </div>
        </div>

        {/* What3Words */}
        <a href={`https://what3words.com/${w3wSlug}`} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] rounded-xl px-4 py-3 transition-all group"
          aria-label={`Open ${plot.what3words} in What3Words app`}>
          <div className="w-8 h-8 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-black text-red-400" aria-hidden="true">w</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">What3Words location</p>
            <p className="text-sm font-mono font-semibold text-white truncate">{plot.what3words}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-white/25 group-hover:text-white/60 transition-colors flex-shrink-0" aria-hidden="true"/>
        </a>

        {/* GPS coords with copy */}
        <div className="flex items-center gap-2">
          <code className="text-xs font-mono text-white/35 flex-1 bg-white/[0.03] px-3 py-2 rounded-lg truncate">{coordStr}</code>
          <button onClick={() => { navigator.clipboard.writeText(coordStr).catch(()=>{}); setCopied(true); setTimeout(()=>setCopied(false),2000); }}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.07] transition-all flex-shrink-0"
            aria-label={copied ? "Copied!" : "Copy GPS coordinates"}>
            {copied ? <Check className="w-4 h-4 text-emerald-400"/> : <Copy className="w-4 h-4 text-white/40"/>}
          </button>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <button onClick={onViewCert}
            className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#F59E0B] to-amber-600 text-[#060D19] px-4 py-2.5 rounded-xl text-xs font-bold hover:shadow-[0_0_16px_rgba(245,158,11,0.25)] transition-all">
            <Download className="w-3.5 h-3.5"/>Certificate
          </button>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-white/[0.07] hover:bg-white/[0.11] border border-white/[0.1] text-white/70 hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all">
            <MapPin className="w-3.5 h-3.5"/>View on Map
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── 3D Plot Explorer — real canvas terrain ───────────────────────────────────
function PlotExplorer3D({ plot }: { plot: DemoPlot }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const state = useRef({ angle: 0.3, tilt: 0.38, zoom: 1, dragging: false, lx: 0, ly: 0, auto: true });
  const [autoPlay, setAutoPlay] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  const colors = {
    "thingvellir":   { ridge: "#1b4d82", valley: "#0a2846", hi: "#00D4FF" },
    "highland-view": { ridge: "#4a2278", valley: "#1b0940", hi: "#7C3AED" },
    "glacier-estate":{ ridge: "#0e4045", valley: "#061820", hi: "#10B981" },
  }[plot.reserve] ?? { ridge: "#1b4d82", valley: "#0a2846", hi: "#00D4FF" };

  const render = useCallback(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const W = c.width, H = c.height, cx = W/2, cy = H/2;
    const { angle, tilt, zoom } = state.current;
    ctx.clearRect(0,0,W,H);

    // Sky BG
    const bg = ctx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0, "#040c18"); bg.addColorStop(1, colors.valley+"cc");
    ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);

    const ROWS=24, COLS=40;
    const seed = (plot.coordinates.lat * 7919 + plot.coordinates.lng * 6271) % 1000;

    function noise(x:number, y:number) {
      const s = Math.sin(x*127.1 + y*311.7 + seed)*43758.5453;
      return s-Math.floor(s);
    }
    function h(nx:number, ny:number):number {
      const ix=Math.floor(nx), iy=Math.floor(ny), fx=nx-ix, fy=ny-iy;
      const smooth=(t:number)=>t*t*(3-2*t);
      const sx=smooth(fx), sy=smooth(fy);
      return (noise(ix,iy)*(1-sx)+noise(ix+1,iy)*sx)*(1-sy)
           + (noise(ix,iy+1)*(1-sx)+noise(ix+1,iy+1)*sx)*sy;
    }
    function terH(gx:number, gy:number):number {
      const nx=(gx+0.5)*5, ny=(gy+0.5)*5;
      return h(nx,ny)*0.45 + h(nx*2,ny*2)*0.2 + h(nx*4,ny*4)*0.08;
    }

    function project(x:number,y:number,z:number):[number,number] {
      const ca=Math.cos(angle),sa=Math.sin(angle);
      const rx=x*ca-y*sa, ry=x*sa+y*ca;
      const ct=Math.cos(tilt),st=Math.sin(tilt);
      const rz=ry*st+z*ct, ry2=ry*ct-z*st;
      const psc=700/(700+ry2*180);
      const scale=zoom*Math.min(W,H)*0.55;
      return [cx+rx*scale*0.5*psc, cy+(rz*scale*0.35-ry2*55)*psc];
    }

    // Draw terrain back→front
    for(let r=ROWS-1;r>=0;r--) {
      for(let c2=0;c2<COLS-1;c2++) {
        const gx=(c2/(COLS-1))-0.5, gy=(r/(ROWS-1))-0.5;
        const gx2=((c2+1)/(COLS-1))-0.5, gy2=((r+1)/(ROWS-1))-0.5;
        const h00=terH(gx,gy), h10=terH(gx2,gy), h11=terH(gx2,gy2), h01=terH(gx,gy2);
        const avg=(h00+h10+h11+h01)/4;
        const [x0,y0]=project(gx,gy,h00);
        const [x1,y1]=project(gx2,gy,h10);
        const [x2,y2]=project(gx2,gy2,h11);
        const [x3,y3]=project(gx,gy2,h01);
        const isPlot=Math.abs(gx-0.02)<0.09&&Math.abs(gy+0.01)<0.07;
        const bright=0.18+avg*0.65+(1-r/ROWS)*0.18;
        const hex=(v:number)=>Math.floor(Math.max(0,Math.min(255,v))).toString(16).padStart(2,"0");
        let fill:string;
        if(isPlot){ fill=colors.hi+hex(bright*200+55); }
        else if(avg>0.35){ fill=colors.ridge+hex(bright*200+35); }
        else{ fill=colors.valley+hex(bright*210+20); }
        ctx.beginPath();
        ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.lineTo(x2,y2);ctx.lineTo(x3,y3);
        ctx.closePath();
        ctx.fillStyle=fill; ctx.fill();
        ctx.strokeStyle=colors.hi+"12"; ctx.lineWidth=0.25; ctx.stroke();
      }
    }

    // Gold pin at plot center
    const ph=terH(0.02,-0.01);
    const [px,py]=project(0.02,-0.01,ph+0.06);
    // Shadow
    const shd=ctx.createRadialGradient(px,py+5,0,px,py+5,20);
    shd.addColorStop(0,"rgba(0,0,0,0.45)");shd.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle=shd;ctx.beginPath();ctx.ellipse(px,py+5,20,7,0,0,Math.PI*2);ctx.fill();
    // Pulse ring
    const pulse=Math.sin(Date.now()/600)*0.35+0.65;
    ctx.strokeStyle=`rgba(245,158,11,${pulse*0.45})`; ctx.lineWidth=1.5;
    ctx.beginPath();ctx.arc(px,py,15+pulse*6,0,Math.PI*2);ctx.stroke();
    // Stem
    ctx.strokeStyle="#F59E0B";ctx.lineWidth=2;
    ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(px,py-24);ctx.stroke();
    // Head
    ctx.fillStyle="#F59E0B";ctx.beginPath();ctx.arc(px,py-24,7,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="rgba(255,255,255,0.7)";ctx.beginPath();ctx.arc(px-2,py-26,2,0,Math.PI*2);ctx.fill();
    // Label bubble
    const lx=px+12,ly=py-32;
    ctx.fillStyle="rgba(4,9,22,0.8)";
    if(ctx.roundRect){ ctx.beginPath();ctx.roundRect(lx-3,ly-13,86,18,4);ctx.fill(); }
    ctx.fillStyle="#F59E0B";ctx.font="bold 9px monospace";ctx.fillText(plot.plotRef,lx,ly);

    // Bottom bar
    ctx.fillStyle="rgba(4,9,22,0.65)";ctx.fillRect(0,H-26,W,26);
    ctx.fillStyle="rgba(255,255,255,0.22)";ctx.font="9px monospace";
    ctx.fillText(`${plot.coordinates.lat.toFixed(4)}°N  ${Math.abs(plot.coordinates.lng).toFixed(4)}°W  ·  ${plot.reserveName}  ·  Drag to explore`,12,H-9);
  }, [plot, colors]);

  useEffect(() => {
    let last=0;
    function loop(t:number){ state.current.auto&&(state.current.angle+=(t-last)*0.00025); last=t; render(); rafRef.current=requestAnimationFrame(loop); }
    rafRef.current=requestAnimationFrame(loop);
    return ()=>cancelAnimationFrame(rafRef.current);
  },[render]);

  const md=(e:React.MouseEvent)=>{ state.current.dragging=true;state.current.lx=e.clientX;state.current.ly=e.clientY;state.current.auto=false;setAutoPlay(false); };
  const mm=(e:React.MouseEvent)=>{ if(!state.current.dragging)return; state.current.angle+=(e.clientX-state.current.lx)*0.01; state.current.tilt=Math.max(0.08,Math.min(1.15,state.current.tilt-(e.clientY-state.current.ly)*0.005)); state.current.lx=e.clientX;state.current.ly=e.clientY; };
  const mu=()=>{state.current.dragging=false;};
  const wh=(e:React.WheelEvent)=>{ const z=Math.max(0.55,Math.min(2.1,state.current.zoom+(e.deltaY<0?0.12:-0.12))); state.current.zoom=z;setZoomLevel(z); };

  return (
    <section aria-labelledby="explorer-3d-h">
      <div className="flex items-center justify-between mb-2">
        <h2 id="explorer-3d-h" className="font-display text-xl font-bold text-white flex items-center gap-2">
          <Mountain className="w-5 h-5 text-aurora-violet" aria-hidden="true"/>3D Plot Explorer
        </h2>
        <p className="text-xs text-white/30 hidden sm:block">Drag · Scroll to zoom · Click controls</p>
      </div>

      <div className="relative rounded-2xl border border-aurora-violet/25 overflow-hidden bg-[#040c18]">
        <canvas ref={canvasRef} width={680} height={320}
          className="w-full cursor-grab active:cursor-grabbing select-none"
          onMouseDown={md} onMouseMove={mm} onMouseUp={mu} onMouseLeave={mu} onWheel={wh}
          aria-label={`Interactive 3D terrain model of ${plot.reserveName} — your plot is marked with a gold pin`}
        />
        {/* Controls */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          {[
            { label: autoPlay?"Pause rotation":"Play rotation", icon: autoPlay?<Pause className="w-3.5 h-3.5"/>:<Play className="w-3.5 h-3.5"/>, action:()=>{state.current.auto=!autoPlay;setAutoPlay(!autoPlay);} },
            { label:"Zoom in",  icon:<ZoomIn  className="w-3.5 h-3.5"/>, action:()=>{ const z=Math.min(2.1,state.current.zoom+0.15); state.current.zoom=z;setZoomLevel(z); } },
            { label:"Zoom out", icon:<ZoomOut className="w-3.5 h-3.5"/>, action:()=>{ const z=Math.max(0.55,state.current.zoom-0.15); state.current.zoom=z;setZoomLevel(z); } },
            { label:"Reset view",icon:<RotateCcw className="w-3.5 h-3.5"/>, action:()=>{ state.current.angle=0.3;state.current.tilt=0.38;state.current.zoom=1;state.current.auto=true;setAutoPlay(true);setZoomLevel(1); } },
          ].map(({label,icon,action})=>(
            <button key={label} onClick={action}
              className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/55 hover:text-white transition-all"
              aria-label={label}>{icon}</button>
          ))}
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-aurora-violet/30 px-2.5 py-1 rounded-lg">
          <div className="w-1.5 h-1.5 rounded-full bg-aurora-violet animate-pulse"/>
          <span className="text-[10px] text-aurora-violet/80 font-medium">Live 3D · {plot.plotRef}</span>
        </div>
      </div>
    </section>
  );
}

// ─── 360° Virtual Tour ─────────────────────────────────────────────────────────
function VirtualTourSection() {
  const [active, setActive] = useState(0);
  const scene = TOUR_SCENES[active];
  return (
    <section aria-labelledby="tour-h">
      <h2 id="tour-h" className="font-display text-xl font-bold text-white mb-5 flex items-center gap-2">
        <Globe className="w-5 h-5 text-aurora" aria-hidden="true"/>360° Reserve Tour
      </h2>
      <div className="relative rounded-2xl overflow-hidden bg-[#07111f] border border-white/[0.08] mb-4">
        <div className="aspect-video relative">
          <Image src={scene.thumbnail} alt={scene.title} fill className="object-cover opacity-65" sizes="(max-width:768px) 100vw, 800px"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-transparent to-transparent"/>
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/65 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-aurora animate-pulse"/>
            <span className="text-xs font-bold text-white tracking-wider">360°</span>
          </div>
          {/* Placeholder overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 text-center max-w-xs">
              <Globe className="w-10 h-10 text-aurora mx-auto mb-3" aria-hidden="true"/>
              <p className="font-display text-base font-bold text-white mb-1">{scene.title}</p>
              <p className="text-xs text-white/45 mb-4">{scene.description}</p>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"/>
                <span className="text-[10px] text-white/30">Full panorama embed — coming Part 6</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <p className="font-display text-lg font-bold text-white drop-shadow-lg">{scene.title}</p>
            <p className="text-xs text-white/50">{scene.description}</p>
          </div>
        </div>
      </div>
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {TOUR_SCENES.map((s,i)=>(
          <button key={s.id} onClick={()=>setActive(i)}
            className={cn("relative rounded-xl overflow-hidden border transition-all",
              active===i?"border-aurora ring-1 ring-aurora/30":"border-white/[0.08] hover:border-white/20")}
            aria-pressed={active===i} aria-label={`View scene: ${s.title}`}>
            <div className="aspect-video relative">
              <Image src={s.thumbnail} alt={s.title} fill className="object-cover opacity-55"/>
              <div className={cn("absolute inset-0 transition-all",active===i?"bg-aurora/10":"bg-black/30")}/>
              <p className="absolute bottom-1 left-1 right-1 text-[8px] font-semibold text-white/75 text-center leading-tight">{s.title}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

// ─── Handbook ─────────────────────────────────────────────────────────────────
function HandbookSection() {
  const [expanded, setExpanded] = useState<string|null>(null);
  const content: Record<string,string> = {
    "welcome":"Welcome to the Icelandic Titles owner community. This handbook covers everything you need to make the most of your souvenir plot, understand your certificate, and connect with our conservation mission.",
    "your-plot":"Your plot is symbolically located within one of our three managed nature reserves. Using the GPS coordinates and What3Words address on your certificate, you can locate it on Google Maps, Google Earth, or the What3Words app.",
    "your-title":"You may use the souvenir style 'Lord', 'Lady' or 'Jarl of the Icelandic Highlands' on personal correspondence, email signatures, and social profiles. This is a registered trademark of Icelandic Titles ehf. — not a legal noble title.",
    "reserve":"Each reserve has a distinct character — Thingvellir's historic rift valley and UNESCO World Heritage status, the rainbow rhyolite of Landmannalaugar, and the vast glacier world of Vatnajökull. Learn about their geology, wildlife, and history.",
    "conservation":"Your purchase directly funds: native birch reforestation, arctic fox den monitoring, bird ringing surveys, invasive lupine clearance, and glacial retreat data collection. Annual reports published at icelandictitles.com/conservation.",
    "visiting":"All three reserves are in publicly accessible areas of Iceland. You may visit the general area of your plot subject to standard national park rules. Exclusive guided tours with our conservation team are available to book.",
    "certificate":"Your certificate features your personalised title, plot reference, What3Words address, reserve name, and our company details. The 5 sq ft and 10 sq ft packs include a premium A3 printed version on heavyweight card.",
    "legal":"This is a souvenir novelty gift. No legal land rights are conveyed. Iceland abolished nobility in its 1944 constitution — no mechanism exists for registering personal titles under Icelandic law. Icelandic Titles ehf. remains the registered landowner.",
  };
  return (
    <section aria-labelledby="handbook-h">
      <h2 id="handbook-h" className="font-display text-xl font-bold text-white mb-5 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-ice-gold" aria-hidden="true"/>Virtual Owner's Handbook
      </h2>
      <div className="space-y-2">
        {HANDBOOK_CHAPTERS.map(ch=>(
          <div key={ch.id} className="border border-white/[0.07] rounded-xl overflow-hidden">
            <button onClick={()=>setExpanded(expanded===ch.id?null:ch.id)}
              className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-white/[0.03] transition-all"
              aria-expanded={expanded===ch.id}>
              <span className="text-lg flex-shrink-0" aria-hidden="true">{ch.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white/85">{ch.title}</p>
                <p className="text-xs text-white/28">{ch.pages} page{ch.pages!==1?"s":""}</p>
              </div>
              {expanded===ch.id ? <ChevronUp className="w-4 h-4 text-white/30 flex-shrink-0"/> : <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0"/>}
            </button>
            <AnimatePresence>
              {expanded===ch.id&&(
                <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.2}} className="overflow-hidden">
                  <div className="px-4 pb-4 ml-9 border-t border-white/[0.05] pt-3">
                    <p className="text-sm text-white/48 leading-relaxed">{content[ch.id]}</p>
                    <button className="mt-3 text-xs text-aurora hover:text-aurora/70 font-semibold flex items-center gap-1 transition-colors">
                      Read chapter<ArrowRight className="w-3 h-3"/>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Conservation Impact ───────────────────────────────────────────────────────
function ConservationImpact() {
  const {conservation} = DEMO_USER;
  return (
    <section aria-labelledby="cons-h" className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6">
      <h2 id="cons-h" className="font-display text-lg font-bold text-white mb-1 flex items-center gap-2">
        <Leaf className="w-5 h-5 text-aurora-green" aria-hidden="true"/>Your Conservation Impact {conservation.year}
      </h2>
      <p className="text-xs text-white/32 mb-5">Figures reflect all Icelandic Titles reserves you support</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          {icon:<TreePine className="w-5 h-5"/>, label:"Trees Planted",      val:conservation.treesPlanted,                      col:"text-emerald-400", bg:"bg-emerald-500/10"},
          {icon:<Bird     className="w-5 h-5"/>, label:"Birds Tagged",       val:conservation.birdsTagged,                        col:"text-sky-400",     bg:"bg-sky-500/10"},
          {icon:<Binoculars className="w-5 h-5"/>,label:"Fox Dens Monitored",val:conservation.foxDensMonitored,                    col:"text-amber-400",   bg:"bg-amber-500/10"},
          {icon:<Leaf     className="w-5 h-5"/>, label:"Hectares Managed",   val:conservation.hectaresMonitored.toLocaleString(), col:"text-aurora-green",bg:"bg-aurora-green/10"},
        ].map(({icon,label,val,col,bg})=>(
          <div key={label} className={cn("rounded-xl p-4 border border-white/[0.06]",bg)}>
            <div className={cn("mb-2",col)}>{icon}</div>
            <p className={cn("font-display text-2xl font-bold",col)}>{val}</p>
            <p className="text-xs text-white/38 mt-0.5">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-white/28">
        <ShieldCheck className="w-3.5 h-3.5 text-aurora-green flex-shrink-0" aria-hidden="true"/>
        Annual conservation report: icelandictitles.com/conservation-report-{conservation.year}.pdf
      </div>
    </section>
  );
}

// ─── Adoption Card ─────────────────────────────────────────────────────────────
function AdoptionCard({ adoption }: { adoption: DemoAdoption }) {
  const daysLeft = Math.max(0,Math.ceil((new Date(adoption.nextRenewal).getTime()-Date.now())/86400000));
  const urgent = daysLeft<30;
  return (
    <article className="bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] rounded-2xl overflow-hidden transition-all group">
      <div className="relative h-36 overflow-hidden">
        <Image src={adoption.photo} alt={adoption.animalName} fill className="object-cover opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" sizes="300px"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d19] via-transparent to-transparent"/>
        <span className="absolute top-3 left-3 text-2xl" aria-hidden="true">{adoption.animalIcon}</span>
        <p className="absolute bottom-3 left-3 font-display text-base font-bold text-white">{adoption.animalName}</p>
      </div>
      <div className="p-4 space-y-2">
        <p className="text-xs text-white/42 leading-relaxed line-clamp-2">{adoption.bio}</p>
        <div className={cn("flex items-center gap-1.5 text-xs font-medium",urgent?"text-amber-400":"text-white/32")}>
          <Clock className="w-3.5 h-3.5" aria-hidden="true"/>
          {urgent?`Renewal in ${daysLeft} days`:`Renews ${formatDate(adoption.nextRenewal)}`}
        </div>
        <Link href="/adopt-a-horse" className="flex items-center gap-1.5 text-xs text-aurora hover:text-aurora/65 font-semibold transition-colors">
          <Heart className="w-3.5 h-3.5" aria-hidden="true"/>Manage adoption
        </Link>
      </div>
    </article>
  );
}

// ─── Tour Booking Banner ───────────────────────────────────────────────────────
function TourBanner() {
  const b = DEMO_USER.tourBooking;
  if (!b) return null;
  const days = Math.ceil((new Date(b.date).getTime()-Date.now())/86400000);
  return (
    <div className="bg-gradient-to-r from-aurora/10 to-aurora-violet/10 border border-aurora/20 rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 text-aurora" aria-hidden="true"/>
            <p className="text-xs font-bold text-aurora uppercase tracking-wider">Upcoming Tour</p>
          </div>
          <p className="font-display text-lg font-bold text-white">{b.tourName}</p>
          <p className="text-xs text-white/45 mt-0.5">Guide: {b.guide} · {formatDate(b.date)}</p>
          <p className="text-xs font-mono text-white/28 mt-1">{b.confirmationCode}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="font-display text-3xl font-bold text-aurora">{days}</p>
          <p className="text-[10px] text-white/32 uppercase tracking-wider">days away</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Link href="/guided-tours" className="flex-1 flex items-center justify-center gap-1.5 bg-aurora/15 hover:bg-aurora/25 border border-aurora/30 text-aurora px-4 py-2 rounded-xl text-xs font-bold transition-all">
          <Compass className="w-3.5 h-3.5"/>View Details
        </Link>
        <button className="flex items-center justify-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white/55 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all">
          <Calendar className="w-3.5 h-3.5"/>Add to Calendar
        </button>
      </div>
    </div>
  );
}

// ─── Main Dashboard ────────────────────────────────────────────────────────────
export default function WelcomeDashboardPage() {
  const user = DEMO_USER;
  const [certPlot, setCertPlot] = useState<DemoPlot|null>(null);
  const primary = user.plots[0];

  return (
    <>
      <AnimatePresence>
        {certPlot && <CertificateModal plot={certPlot} onClose={()=>setCertPlot(null)}/>}
      </AnimatePresence>

      {/* Demo banner */}
      <div className="bg-[#F59E0B]/10 border-b border-[#F59E0B]/20 py-2.5 px-4">
        <p className="text-xs text-[#F59E0B]/75 text-center flex items-center justify-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true"/>
          <strong>Demo Mode</strong> — Showing sample data for Lord James Morrison. Production dashboard is authentication-protected.
        </p>
      </div>

      {/* Hero greeting */}
      <section className="relative pt-12 pb-10 overflow-hidden" aria-labelledby="welcome-h">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04091a] to-ice-black" aria-hidden="true"/>
        <div className="aurora-orb aurora-orb-1 opacity-10 -top-20 -right-20" aria-hidden="true"/>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-ice-gold/20 border border-ice-gold/30 flex items-center justify-center">
                  <span className="text-xl" aria-hidden="true">👑</span>
                </div>
                <div className="flex items-center gap-2 bg-aurora-green/10 border border-aurora-green/25 px-3 py-1 rounded-full">
                  <BadgeCheck className="w-3.5 h-3.5 text-aurora-green" aria-hidden="true"/>
                  <span className="text-xs text-aurora-green font-bold uppercase tracking-wider">Verified Owner</span>
                </div>
              </div>
              <h1 id="welcome-h" className="font-display text-[clamp(1.8rem,5vw,2.8rem)] font-bold text-white leading-tight">
                Welcome back,<br/>
                <span className="text-ice-gold">
                  {user.titleStyle} {user.name.split(" ")[0]}!
                </span>
              </h1>
              <p className="text-white/42 text-sm mt-2">
                Member since {formatDate(user.memberSince)} · {user.plots.length} plot{user.plots.length!==1?"s":""} · {user.adoptions.length} adoption{user.adoptions.length!==1?"s":""}
              </p>
            </motion.div>
            {/* Quick stats */}
            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.1}}
              className="grid grid-cols-3 gap-3 sm:min-w-[280px]">
              {[
                {label:"Plots Owned",     val:user.plots.length,                icon:"📍"},
                {label:"Animals Adopted", val:user.adoptions.length,            icon:"🐴"},
                {label:"Trees Planted",   val:user.conservation.treesPlanted,   icon:"🌲"},
              ].map(({label,val,icon})=>(
                <div key={label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3 text-center">
                  <span className="text-xl" aria-hidden="true">{icon}</span>
                  <p className="font-display text-xl font-bold text-white mt-1">{val}</p>
                  <p className="text-[10px] text-white/32 leading-tight mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 space-y-12">

        {/* Plots */}
        <section aria-labelledby="plots-h">
          <h2 id="plots-h" className="font-display text-xl font-bold text-white mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-ice-gold" aria-hidden="true"/>Your Plots
          </h2>
          <div className={cn("grid gap-5", user.plots.length>1?"sm:grid-cols-2":"max-w-sm")}>
            {user.plots.map(p=><PlotMapCard key={p.id} plot={p} onViewCert={()=>setCertPlot(p)}/>)}
          </div>
        </section>

        {/* 3D Explorer */}
        <PlotExplorer3D plot={primary}/>

        {/* 360 Tour */}
        <VirtualTourSection/>

        {/* Upcoming tour */}
        <TourBanner/>

        {/* Handbook */}
        <HandbookSection/>

        {/* Adoptions */}
        {user.adoptions.length>0&&(
          <section aria-labelledby="adopt-h">
            <div className="flex items-center justify-between mb-5">
              <h2 id="adopt-h" className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" aria-hidden="true"/>Your Adoptions
              </h2>
              <Link href="/adopt-a-horse" className="text-xs text-aurora hover:text-aurora/65 font-semibold flex items-center gap-1 transition-colors">
                Adopt more<ArrowRight className="w-3 h-3"/>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {user.adoptions.map(a=><AdoptionCard key={a.id} adoption={a}/>)}
            </div>
          </section>
        )}

        {/* Conservation */}
        <ConservationImpact/>

        {/* Quick links */}
        <section aria-labelledby="links-h">
          <h2 id="links-h" className="font-display text-xl font-bold text-white mb-5 flex items-center gap-2">
            <Star className="w-5 h-5 text-ice-gold" aria-hidden="true"/>Quick Links
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {href:"/buy-a-plot",    icon:"📍", label:"Buy Another Plot",  sub:"Expand your estate"},
              {href:"/adopt-a-horse", icon:"🐴", label:"Adopt an Animal",   sub:"Horses, foxes, puffins"},
              {href:"/guided-tours",  icon:"🧭", label:"Book a Tour",       sub:"Visit your reserve"},
              {href:"/faq",           icon:"❓", label:"FAQ & Help",         sub:"Common questions"},
            ].map(({href,icon,label,sub})=>(
              <Link key={href} href={href}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 hover:bg-white/[0.06] hover:border-white/15 transition-all group"
                aria-label={`${label} — ${sub}`}>
                <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform" aria-hidden="true">{icon}</span>
                <p className="text-sm font-semibold text-white/78">{label}</p>
                <p className="text-xs text-white/32 mt-0.5">{sub}</p>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
