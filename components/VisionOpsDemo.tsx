'use client'

import { useState } from 'react'

type Result = {
  document_type: string
  extracted: {
    shipment_id: string
    customer: string
    amount: string
    destination: string
    date: string
  }
  risk_score: number
  status: string
  missing_items: string[]
  recommended_action: string
  summary: string
}

export default function VisionOpsDemo() {
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [result, setResult] = useState<Result | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0])
  }

  const handleAnalyze = async () => {
    if (!file) return
    setStatus('loading')
    setResult(null)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/visionops/analyze`, {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      setResult(data)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const getRiskColor = (score: number) => {
    if (score >= 75) return 'text-red-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-green-400'
  }

  const getStatusColor = (s: string) => {
    if (s === 'Critical' || s === 'Delayed') return 'text-red-400'
    if (s === 'At Risk') return 'text-yellow-400'
    return 'text-green-400'
  }

  return (
    <div className="glass-card mt-8 flex flex-col gap-6 p-6 sm:mt-10 sm:p-10">
      {/* Upload Section */}
      <div>
        <p className="eyebrow mb-4 text-[0.65rem] text-[var(--accent)]">Step 1 — Upload Document</p>
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 px-6 py-10 text-center transition hover:border-white/40">
          <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={handleFileChange} className="hidden" />
          {file ? (
            <span className="text-sm text-white/80">{file.name}</span>
          ) : (
            <>
              <span className="text-2xl">📄</span>
              <span className="mt-2 text-sm text-white/50">Click to upload Invoice, Manifest, PO, or Delivery Report</span>
              <span className="mt-1 text-xs text-white/30">PDF, PNG, JPG supported</span>
            </>
          )}
        </label>
      </div>

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        disabled={!file || status === 'loading'}
        className="btn btn-primary w-full disabled:opacity-40"
      >
        {status === 'loading' ? 'Analyzing Operations...' : 'Analyze Document'}
      </button>

      {/* Error */}
      {status === 'error' && (
        <p className="text-center text-sm text-red-400">Something went wrong. Please try again.</p>
      )}

      {/* Results */}
      {status === 'success' && result && (
        <div className="flex flex-col gap-4">
          <p className="eyebrow text-[0.65rem] text-[var(--accent)]">Step 2 — Operations Overview</p>

          {/* Summary */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs text-white/50 mb-1">Document Type</p>
            <p className="text-white font-medium">{result.document_type}</p>
            <p className="text-xs text-white/50 mt-3 mb-1">Summary</p>
            <p className="text-sm text-white/80">{result.summary}</p>
          </div>

          {/* Extracted Data */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs text-white/50 mb-3">Extracted Data</p>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(result.extracted).map(([key, value]) => value ? (
                <div key={key}>
                  <p className="text-xs text-white/40 capitalize">{key.replace('_', ' ')}</p>
                  <p className="text-sm text-white/90">{value}</p>
                </div>
              ) : null)}
            </div>
          </div>

          {/* Risk + Status */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-white/50 mb-1">Risk Score</p>
              <p className={`text-2xl font-bold ${getRiskColor(result.risk_score)}`}>
                {result.risk_score}/100
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-white/50 mb-1">Status</p>
              <p className={`text-lg font-semibold ${getStatusColor(result.status)}`}>
                {result.status}
              </p>
            </div>
          </div>

          {/* Missing Items */}
          {result.missing_items?.length > 0 && (
            <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
              <p className="text-xs text-yellow-400 mb-2">Missing Items</p>
              <ul className="list-disc list-inside text-sm text-white/70">
                {result.missing_items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommended Action */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs text-white/50 mb-1">Recommended Action</p>
            <p className="text-sm text-white/90">{result.recommended_action}</p>
          </div>
        </div>
      )}
    </div>
  )
}