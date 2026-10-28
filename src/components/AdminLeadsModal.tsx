import React, { useState, useEffect } from 'react';
import { AdmissionInquiry, Language } from '../types';
import {
  X,
  Phone,
  MessageCircle,
  Download,
  Trash2,
  CheckCircle,
  Clock,
  User,
  MapPin,
  GraduationCap,
  Database,
  Search
} from 'lucide-react';

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [leads, setLeads] = useState<AdmissionInquiry[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted'>('all');

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const loadLeads = () => {
    try {
      const stored = localStorage.getItem('byd_institute_leads');
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        setLeads([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateStatus = (id: string, status: 'new' | 'contacted' | 'enrolled') => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    setLeads(updated);
    localStorage.setItem('byd_institute_leads', JSON.stringify(updated));
  };

  const deleteLead = (id: string) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      const updated = leads.filter((l) => l.id !== id);
      setLeads(updated);
      localStorage.setItem('byd_institute_leads', JSON.stringify(updated));
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['Date', 'Name', 'Phone', 'Course', 'City', 'Batch', 'Status'];
    const rows = leads.map((l) => [
      new Date(l.createdAt).toLocaleDateString(),
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.courseName}"`,
      `"${l.city}"`,
      l.preferredBatch,
      l.status,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `BYD_Institute_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  const filteredLeads = leads
    .filter((l) => {
      if (filter === 'all') return true;
      return l.status === filter;
    })
    .filter((l) => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        l.name.toLowerCase().includes(q) ||
        l.phone.includes(q) ||
        l.courseName.toLowerCase().includes(q) ||
        l.city.toLowerCase().includes(q)
      );
    });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white">
                BYD Institute Admin: Student Inquiries & Leads
              </h2>
              <p className="text-xs text-slate-400">
                {leads.length} total applicant inquiries recorded
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {leads.length > 0 && (
              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                title="Export leads as CSV for Excel"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-slate-900/60 border-b border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search name, phone, course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All ({leads.length})
            </button>
            <button
              onClick={() => setFilter('new')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === 'new'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              New ({leads.filter((l) => l.status === 'new').length})
            </button>
            <button
              onClick={() => setFilter('contacted')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === 'contacted'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Contacted ({leads.filter((l) => l.status === 'contacted').length})
            </button>
          </div>
        </div>

        {/* Leads Table / Cards */}
        <div className="overflow-y-auto p-4 flex-1">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-16 text-slate-500 text-sm">
              <Database className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No student inquiries match the criteria.</p>
              <p className="text-xs text-slate-600 mt-1">
                New demo class applications submitted on the website will show up here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{lead.name}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                          lead.status === 'new'
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                            : lead.status === 'contacted'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </div>

                    <p className="text-xs text-red-400 font-semibold flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {lead.courseName}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {lead.city}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {lead.preferredBatch}
                      </span>
                      <span>•</span>
                      <span className="text-[11px] text-slate-500">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
                    <a
                      href={`tel:${lead.phone}`}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400"
                      title="Call student"
                    >
                      <Phone className="w-4 h-4" />
                    </a>

                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Hello ${lead.name}, thank you for inquiring about ${lead.courseName} at BYD Technical Institute Chandkheda. When would you like to attend the demo class?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white"
                      title="Open WhatsApp chat"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead.id, e.target.value as any)}
                      className="bg-slate-900 border border-slate-700 rounded-lg text-xs text-white px-2 py-1.5 focus:outline-none"
                    >
                      <option value="new">Mark New</option>
                      <option value="contacted">Mark Contacted</option>
                      <option value="enrolled">Mark Enrolled</option>
                    </select>

                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-rose-900/50 text-slate-400 hover:text-rose-400"
                      title="Delete inquiry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
